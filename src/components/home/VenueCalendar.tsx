
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

export const VenueCalendar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear existing calendar if any
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Add calendar container
    const calendarDiv = document.createElement('div');
    calendarDiv.id = `main-calendar-${key}`;
    containerRef.current.appendChild(calendarDiv);
    
    // Add stylesheet
    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);
    
    // Add custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      #main-calendar-${key} {
        max-width: 900px;
        margin: 40px auto;
        font-family: Arial, sans-serif;
      }
    `;
    document.head.appendChild(styleElement);
    
    // Load FullCalendar script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js';
    script.async = true;
    
    // Initialize calendar after script loads
    script.onload = async () => {
      try {
        // Use Google Sheets direct URL with cache busting
        const timestamp = new Date().getTime();
        const response = await fetch(`https://docs.google.com/spreadsheets/d/e/2PACX-1vR6qHV8Zi2vWlVb_Ahp6TmkGcfPkR6-P4l5fEH-FFSBGyXsgkcsm3TUuWtxGkgQyi2rt0uaBRvueE81/pub?output=csv&t=${timestamp}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        // Parse CSV data
        const csvText = await response.text();
        const rows = csvText.split('\n');
        const headers = rows[0].split(',');
        
        // Find the indices for Date, Status, and Title columns
        const dateIndex = headers.findIndex(h => h.trim() === 'Date');
        const statusIndex = headers.findIndex(h => h.trim() === 'Status');
        const titleIndex = headers.findIndex(h => h.trim() === 'Title');
        
        if (dateIndex === -1 || statusIndex === -1) {
          throw new Error('Required columns not found in the CSV data');
        }
        
        // Process the rows into calendar events
        const events = rows.slice(1).map(row => {
          const columns = row.split(',');
          const date = columns[dateIndex]?.trim();
          const status = columns[statusIndex]?.trim();
          const title = titleIndex !== -1 ? columns[titleIndex]?.trim() : '';
          
          if (!date || !status) return null;
          
          return {
            title: status === 'Booked' ? `🔴 Booked: ${title}` : '🟢 Available',
            start: date,
            color: status === 'Booked' ? 'red' : 'green'
          };
        }).filter(Boolean);

        if ((window as any).FullCalendar) {
          const calendar = new (window as any).FullCalendar.Calendar(document.getElementById(`main-calendar-${key}`), {
            initialView: 'dayGridMonth',
            events: events,
            headerToolbar: {
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,listMonth'
            }
          });

          calendar.render();
          toast.success('Calendar loaded successfully');
        } else {
          throw new Error('FullCalendar is not loaded');
        }
      } catch (error) {
        console.error('Error loading calendar data:', error);
        toast.error('Failed to load calendar data. Please try again later.');
        
        // Add a simple message to the calendar container
        if (containerRef.current) {
          const errorMsg = document.createElement('div');
          errorMsg.className = 'text-center text-red-500 p-4';
          errorMsg.textContent = 'Unable to load calendar data. Please try again later.';
          containerRef.current.appendChild(errorMsg);
        }
      }
    };
    
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      if (document.head.contains(styleLink)) {
        document.head.removeChild(styleLink);
      }
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, [key]);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-white rounded-lg shadow-lg p-4">
      <div ref={containerRef}></div>
    </div>
  );
};

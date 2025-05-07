
import React, { useEffect, useRef } from 'react';

export const VenueCalendar: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Add calendar container
    const calendarDiv = document.createElement('div');
    calendarDiv.id = 'calendar';
    containerRef.current.appendChild(calendarDiv);
    
    // Add stylesheet
    const styleLink = document.createElement('link');
    styleLink.href = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css';
    styleLink.rel = 'stylesheet';
    document.head.appendChild(styleLink);
    
    // Add custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      #calendar {
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
        const response = await fetch('https://opensheet.elk.sh/2PACX-1vR6qHV8Zi2vWlVb_Ahp6TmkGcfPkR6-P4l5fEH-FFSBGyXsgkcsm3TUuWtxGkgQyi2rt0uaBRvueE81/Sheet1');
        const data = await response.json();

        const events = data.map((row: any) => ({
          title: row.Status === 'Booked' ? '🔴 Booked: ' + row.Title : '🟢 Available',
          start: row.Date,
          color: row.Status === 'Booked' ? 'red' : 'green'
        }));

        const calendar = new (window as any).FullCalendar.Calendar(document.getElementById('calendar'), {
          initialView: 'dayGridMonth',
          events: events
        });

        calendar.render();
      } catch (error) {
        console.error('Error loading calendar data:', error);
      }
    };
    
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      document.head.removeChild(styleLink);
      document.head.removeChild(styleElement);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-white rounded-lg shadow-lg p-4">
      <div ref={containerRef}></div>
    </div>
  );
};

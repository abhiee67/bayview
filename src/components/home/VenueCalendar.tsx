
import React, { useEffect, useRef } from 'react';

interface Event {
  title: string;
  start: string;
  color: string;
}

export const VenueCalendar: React.FC = () => {
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendarRef.current) return;

    // Load the required scripts and CSS
    const loadFullCalendar = async () => {
      // Check if FullCalendar is already loaded
      if (!(window as any).FullCalendar) {
        // Load CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css';
        document.head.appendChild(cssLink);
        
        // Load JS
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js';
        script.async = true;
        
        // Wait for script to load
        await new Promise((resolve) => {
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }

      // Fetch event data
      try {
        const res = await fetch('https://opensheet.elk.sh/1HxFUHYy7dKCUhFATVZg85oD4oa0LXMKz8FW-W8oIk6Y/Sheet1');
        const data = await res.json();

        const events: Event[] = data.map((row: any) => ({
          title: row.Status === 'Booked' ? '🔴 Booked' : '🟢 Available',
          start: row.Date,
          color: row.Status === 'Booked' ? 'red' : 'green'
        }));

        // Initialize calendar once data is fetched
        const calendar = new (window as any).FullCalendar.Calendar(calendarRef.current, {
          initialView: 'dayGridMonth',
          events: events,
          height: 'auto',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek'
          }
        });

        calendar.render();
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    loadFullCalendar();

    // Cleanup function
    return () => {
      // Clean up any listeners if necessary
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-serif text-center text-maroon mb-6">Function Hall Booking Calendar</h2>
      <div ref={calendarRef} className="w-full"></div>
    </div>
  );
};

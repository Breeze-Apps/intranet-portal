import React from 'react';
import { format } from 'date-fns';
import { Calendar, Clock } from 'lucide-react';

const sampleEvents = [
  {
    id: '1',
    title: 'Team Building Workshop',
    date: '2024-03-20',
    time: '14:00',
    location: 'Main Conference Room',
    department: 'HR',
    category: 'Training',
    description: 'Monthly team building session'
  },
  {
    id: '2',
    title: 'Project Review Meeting',
    date: '2024-03-21',
    time: '10:00',
    location: 'Virtual',
    department: 'Engineering',
    category: 'Meeting',
    description: 'Q1 project status review'
  },
  {
    id: '3',
    title: 'New Employee Orientation',
    date: '2024-03-22',
    time: '09:00',
    location: 'Training Room A',
    department: 'HR',
    category: 'Onboarding',
    description: 'Welcome session for new hires'
  }
];

export const EventsWidget: React.FC = () => {
  return (
    <div className="space-y-4">
      {sampleEvents.map((event) => (
        <div key={event.id} className="border-b border-gray-200 pb-4 last:border-0">
          <h3 className="font-semibold text-lg text-blue-600">{event.title}</h3>
          <div className="flex items-center space-x-4 mt-2 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(event.date), 'MMM dd, yyyy')}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {event.time}
            </div>
          </div>
          <p className="mt-1 text-gray-500">{event.location}</p>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded">
              {event.department}
            </span>
            <span className="inline-block px-2 py-1 text-sm bg-gray-100 text-gray-800 rounded ml-2">
              {event.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
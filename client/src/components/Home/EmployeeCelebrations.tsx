import React from 'react';
import { Cake, Award } from 'lucide-react';

const sampleCelebrations = [
  {
    id: '1',
    name: 'John Smith',
    department: 'Engineering',
    role: 'Senior Developer',
    email: 'john.smith@company.com',
    phone: '555-0123',
    location: 'New York',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    birthday: '2024-03-15'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    department: 'Marketing',
    role: 'Marketing Manager',
    email: 'sarah.johnson@company.com',
    phone: '555-0124',
    location: 'San Francisco',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    anniversary: '2024-03-16'
  }
];

export const EmployeeCelebrations: React.FC = () => {
  return (
    <div className="space-y-4">
      {sampleCelebrations.map((employee) => (
        <div key={employee.id} className="flex items-center space-x-4 border-b border-gray-200 pb-4 last:border-0">
          <img
            src={employee.photoUrl}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{employee.name}</h3>
            <p className="text-sm text-gray-600">{employee.department}</p>
            <div className="flex items-center mt-1">
              {employee.birthday && (
                <div className="flex items-center text-pink-600">
                  <Cake className="w-4 h-4 mr-1" />
                  <span className="text-sm">Birthday</span>
                </div>
              )}
              {employee.anniversary && (
                <div className="flex items-center text-purple-600">
                  <Award className="w-4 h-4 mr-1" />
                  <span className="text-sm">Work Anniversary</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
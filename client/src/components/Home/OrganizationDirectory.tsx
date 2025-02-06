import React, { useState } from 'react';
import { Input } from '@fluentui/react-components';
import { Search24Regular } from '@fluentui/react-icons';
import { Phone, Mail, MapPin } from 'lucide-react';

const sampleEmployees = [
  {
    id: '1',
    name: 'John Smith',
    department: 'Engineering',
    role: 'Senior Developer',
    email: 'john.smith@company.com',
    phone: '555-0123',
    location: 'New York',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    department: 'Marketing',
    role: 'Marketing Manager',
    email: 'sarah.johnson@company.com',
    phone: '555-0124',
    location: 'San Francisco',
    photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    id: '3',
    name: 'Michael Brown',
    department: 'Sales',
    role: 'Sales Director',
    email: 'michael.brown@company.com',
    phone: '555-0125',
    location: 'Chicago',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
  }
];

export const OrganizationDirectory: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = sampleEmployees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-[500px]">
      <div className="mb-4 flex-shrink-0">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search employees..."
          contentBefore={<Search24Regular />}
        />
      </div>

      <div className="space-y-4 overflow-y-auto flex-grow">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="flex items-start space-x-4 border-b border-gray-200 pb-4 last:border-0">
            <img
              src={employee.photoUrl}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-grow">
              <h3 className="font-semibold">{employee.name}</h3>
              <p className="text-sm text-gray-600">{employee.role}</p>
              <p className="text-sm text-gray-500">{employee.department}</p>
              <div className="mt-2 space-y-1">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${employee.email}`} className="hover:text-blue-600">
                    {employee.email}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:${employee.phone}`} className="hover:text-blue-600">
                    {employee.phone}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {employee.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import {
  FileText,
  Headphones,
  Calendar,
  FileQuestion,
  Building2,
  Mail,
  Receipt,
  Shield
} from 'lucide-react';

const quickLinks = [
  {
    category: 'HR',
    links: [
      { title: 'Employee Handbook', icon: FileText, url: '#' },
      { title: 'Benefits Portal', icon: Shield, url: '#' },
      { title: 'Time Off Request', icon: Calendar, url: '#' }
    ]
  },
  {
    category: 'IT',
    links: [
      { title: 'Help Desk', icon: Headphones, url: '#' },
      { title: 'Knowledge Base', icon: FileQuestion, url: '#' }
    ]
  },
  {
    category: 'Finance',
    links: [
      { title: 'Expense Reports', icon: Receipt, url: '#' },
      { title: 'Payroll Portal', icon: Building2, url: '#' }
    ]
  },
  {
    category: 'Communication',
    links: [
      { title: 'Company Directory', icon: Mail, url: '#' }
    ]
  }
];

export const QuickLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {quickLinks.map((category) => (
        <div key={category.category}>
          <h3 className="font-semibold text-gray-700 mb-3">{category.category}</h3>
          <ul className="space-y-2">
            {category.links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.title}>
                  <a
                    href={link.url}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};
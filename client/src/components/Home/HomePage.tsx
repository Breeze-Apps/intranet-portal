import React from 'react';
import { Carousel } from './Carousel';
import { NewsSection } from './NewsSection';
import { EventsWidget } from './EventsWidget';
import { EmployeeCelebrations } from './EmployeeCelebrations';
import { QuickLinks } from './QuickLinks';
import { OrganizationDirectory } from './OrganizationDirectory';
import { useTheme } from '../../context/ThemeContext';

// Sample data remains the same
const announcements = [
  {
    id: '1',
    title: 'Company All-Hands Meeting',
    content: 'Join us for our quarterly update on company progress and future plans.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    date: '2024-03-15',
    priority: 1
  },
  {
    id: '2',
    title: 'New Office Opening',
    content: 'Exciting news! Were expanding with a new office location.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    date: '2024-03-16',
    priority: 2
  },
  {
    id: '3',
    title: 'Wellness Program Launch',
    content: 'Introducing our new employee wellness program starting next month.',
    imageUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b',
    date: '2024-03-17',
    priority: 3
  }
];

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  const { theme } = useTheme();
  return (
    <div className="mb-6">
      <h2 className={`text-3xl font-bold ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      <div className={`h-1 w-24 mt-2 ${
        theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
      }`}></div>
    </div>
  );
};

export const HomePage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="space-y-8">
      <section className="mb-8">
        <Carousel announcements={announcements} />
      </section>

      <section className="mb-8">
        <SectionHeading title="Latest News" />
        <NewsSection />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className={`rounded-lg shadow-md p-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <SectionHeading title="Upcoming Events" />
          <EventsWidget />
        </section>

        <section className={`rounded-lg shadow-md p-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <SectionHeading title="Employee Celebrations" />
          <EmployeeCelebrations />
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className={`rounded-lg shadow-md p-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <SectionHeading title="Quick Links" />
          <QuickLinks />
        </section>

        <section className={`rounded-lg shadow-md p-6 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <SectionHeading title="Organization Directory" />
          <OrganizationDirectory />
        </section>
      </div>
    </div>
  );
};
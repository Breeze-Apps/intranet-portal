import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Newspaper, TrendingUp, Users, Award } from 'lucide-react';

const newsItems = [
  {
    id: '1',
    title: 'Q1 Financial Results Exceed Expectations',
    summary: 'Company reports strong growth in first quarter, surpassing market predictions.',
    date: '2024-03-15',
    category: 'Financial',
    icon: TrendingUp
  },
  {
    id: '2',
    title: 'New Partnership Announcement',
    summary: 'Strategic alliance formed with leading tech firm to enhance product offerings.',
    date: '2024-03-14',
    category: 'Business',
    icon: Newspaper
  },
  {
    id: '3',
    title: 'Employee Wellness Program Launch',
    summary: 'New initiative focuses on mental and physical health support for all staff.',
    date: '2024-03-13',
    category: 'HR',
    icon: Users
  },
  {
    id: '4',
    title: 'Innovation Award Recognition',
    summary: 'Company receives industry recognition for technological advancement.',
    date: '2024-03-12',
    category: 'Awards',
    icon: Award
  }
];

export const NewsSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {newsItems.map((news) => {
        const Icon = news.icon;
        return (
          <div 
            key={news.id} 
            className={`rounded-lg shadow-md p-6 transition-transform duration-200 hover:scale-102 hover:shadow-lg ${
              theme === 'dark' ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-full ${
                theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {news.category}
                  </span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {new Date(news.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {news.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} line-clamp-2`}>
                  {news.summary}
                </p>
                <button className={`mt-4 text-sm font-medium ${
                  theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}>
                  Read more →
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
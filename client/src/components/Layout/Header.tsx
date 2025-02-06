import React, { useState } from 'react';
import {
  Button,
  Input,
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
} from '@fluentui/react-components';
import { Navigation20Regular, Search24Regular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';
import { Building2, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className={`h-8 w-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`ml-2 text-xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Intranet Portal
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Input
              className="w-64"
              placeholder="Search..."
              contentBefore={<Search24Regular />}
            />
            <nav className="flex space-x-4">
              <Link to="/" className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
              } px-3 py-2`}>
                Home
              </Link>
              <Link to="/intranet-portal/departments" className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
              } px-3 py-2`}>
                Departments
              </Link>
              <Link to="/intranet-portal/feedback" className={`${
                theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
              } px-3 py-2`}>
                Feedback
              </Link>
            </nav>
            <Button
              icon={theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            />
          </div>

          <div className="md:hidden">
            <Menu open={isMenuOpen} onOpenChange={(e, data) => setIsMenuOpen(data.open)}>
              <MenuTrigger>
                <Button icon={<Navigation20Regular />} />
              </MenuTrigger>
              <MenuPopover>
                <MenuList>
                  <MenuItem>
                    <Link to="/">Home</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/departments">Departments</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/feedback">Feedback</Link>
                  </MenuItem>
                  <MenuItem onClick={toggleTheme}>
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </MenuItem>
                </MenuList>
              </MenuPopover>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-400">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-blue-400">Help Desk</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-400">
              Confidentiality Notice: This intranet portal and its contents are confidential and intended
              for internal use only. Unauthorized access, disclosure, copying, distribution, or use of
              any information herein is strictly prohibited.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Corporate Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
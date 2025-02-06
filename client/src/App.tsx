import React from 'react';
import { FluentProvider } from '@fluentui/react-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { HomePage } from './components/Home/HomePage';

const AppContent = () => {
  const { currentTheme } = useTheme();
  
  return (
    <FluentProvider theme={currentTheme}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <div className="max-w-6xl mx-auto px-4 py-8 w-full">
              <Routes>
                <Route path="/intranet-portal/" element={<HomePage />} />
                <Route path="/intranet-portal/departments" element={<div>Departments Page</div>} />
                <Route path="/intranet-portal/feedback" element={<div>Feedback Page</div>} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </FluentProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
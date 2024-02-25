import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode; // You can use React.ReactNode for children of any type
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-custom md:mx-24 md:py-6">
      <Header />
      {children}
      {/* Footer would go here */}
    </div>
  );
};

export default Layout;

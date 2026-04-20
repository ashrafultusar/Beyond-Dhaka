import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
  }

const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Common Navbar */}
            <Navbar />

            {/* Main Page Content */}
            <main className="flex-grow">
                {children}
            </main>
            <WhatsAppWidget />
            {/* Common Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;
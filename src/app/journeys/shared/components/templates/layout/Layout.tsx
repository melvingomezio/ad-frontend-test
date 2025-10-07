import React from 'react';
import { LayoutProps } from './resources/layout.config';

export const Layout: React.FC<LayoutProps> = ({
  navbar,
  children,
  footer,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        {navbar}
      </header>
      
      <main className="flex-1 w-full">
        {children}
      </main>
      
      <footer className="w-full">
        {footer}
      </footer>
    </div>
  );
};
'use client';

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-800 min-h-screen font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-800">Association Tivoli-Surville</h1>
            <nav className="space-x-4">
              <a href="#actus" className="text-blue-600 hover:underline">Actus</a>
              <a href="#agenda" className="text-blue-600 hover:underline">Agenda</a>
              <a href="#galerie" className="text-blue-600 hover:underline">Galerie</a>
              <a href="#contact" className="text-blue-600 hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-white mt-12 py-6 text-center text-sm text-gray-500">
          © 2025 Association Tivoli-Surville. Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}

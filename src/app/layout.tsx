import { Inter } from 'next/font/google';

import './globals.css';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alexandre Araujo',
  description: 'Alexandre Araujo - Software Engineer'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} px-14`}>
        <Toaster position="bottom-left" />
        <Header />
        {children}
      </body>
    </html>
  );
}

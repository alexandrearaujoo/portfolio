import './globals.css';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import Header from '@/components/Header';

import { languages } from '@/i18n/settings';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alexandre Araujo | Portfolio',
  description: 'Alexandre Araujo - Software Engineer'
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lang }
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${inter.className} md:px-14`}>
        <NextTopLoader color="#ef4444" />
        <Toaster position="bottom-left" />
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}

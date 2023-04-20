import '@/styles/globals.css';
import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';

import { siteConfig } from '@/config/site';
import { SiteHeader } from '@/components/SiteHeader';
import ThemeProvider from '@/components/ThemeProvider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.title,
};

export default function layout({ children }) {
  return (
    <html
      lang="en"
      style={{
        ['--font-sans' as string]: fontSans.style.fontFamily,
      }}
    >
      <head />
      <body>
        <ThemeProvider>
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

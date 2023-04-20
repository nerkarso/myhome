'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';

import { ComponentProps } from '@/types/globals';

export default function ThemeProvider({ children }: ComponentProps) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}

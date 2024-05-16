'use client';

import MainHeader from '@/components/layouts/MainHeader';
import './globals.css';
import styles from './layout.module.css';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState(document.cookie.split(' ')?.[2] ?? 'theme_black');
  console.log(theme);
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className={`${styles.body} ${styles[theme]}`}>
        <MainHeader theme={theme} setTheme={setTheme}/>
        {children}
      </body>
    </html>
  );
};
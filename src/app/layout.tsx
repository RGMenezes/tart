'use client';

import MainHeader from '@/components/layouts/MainHeader';
import './globals.css';
import styles from './layout.module.css';
import { useEffect, useState } from 'react';
import Footer from '@/components/layouts/Footer';
import { getCookie } from '@/assets/cookie';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('');
  useEffect(() => setTheme(getCookie('theme') ?? 'theme_black'), []);
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true} className={`${styles.body} ${styles[theme]}`}>
        <MainHeader theme={theme} setTheme={setTheme}/>
        {children}
        <Footer />
      </body>
    </html>
  );
};
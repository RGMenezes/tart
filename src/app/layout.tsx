'use client';

import MainHeader from '@/components/layouts/MainHeader';
import './globals.css';
import styles from './layout.module.css';
import { useEffect, useState } from 'react';
import Footer from '@/components/layouts/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('');
  useEffect(() => setTheme(typeof document !== 'undefined' && document?.cookie === 'theme_white' ? document.cookie : 'theme_black'), []);
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
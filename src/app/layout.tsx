"use client";

import "./globals.css";
import styles from "./layout.module.css";
import { useEffect, useState } from "react";
import { Header, Footer } from "@/shared/layout";
import { getCookie } from "@/utils/cookie";

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    const [theme, setTheme] = useState("");
    useEffect(() => setTheme(getCookie("theme") ?? "theme_black"), []);
    return (
        <html lang="pt-br">
            <body suppressHydrationWarning={true} className={`${styles.body} ${styles[theme]}`}>
                <Header theme={theme} setTheme={setTheme}/>
                {children}
                <Footer />
            </body>
        </html>
    );
}
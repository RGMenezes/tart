"use client";

import "./globals.css";
import styles from "./layout.module.css";
import { useEffect, useState } from "react";
import { Header, Footer, CookiesBoxAlert, Loading } from "@/shared/layout";
import { getCookie, setCookie } from "@/utils/cookie";

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    const [mensageCookie, setMensageCookie] = useState(false);
    const [theme, setTheme] = useState(false);
    const [isClient, setClient] = useState(false);
    
    useEffect(() => {
        setMensageCookie(getCookie("cookie")?.split(" ")[0] === "true" ? true : false);
        setTheme(getCookie("theme")?.split(" ")[0] === "true" ? true : false);
        setClient(true);
    }, []);
    
    const confirmCookies = () => {
        setCookie("cookie","true", 30);
        setMensageCookie(true);
    };

    const handleTheme = () => {
        const newTheme = !theme;
        setCookie("theme", `${newTheme}`, 30);
        setTheme(newTheme);
    };

    return (
        <html lang="pt-br">
            <body suppressHydrationWarning={true} className={`${styles.body} ${theme ? styles.theme_black : styles.theme_white}`}>
                {!isClient && <Loading />}
                <Header theme={theme} onClick={handleTheme}/>
                {children}
                <Footer />
                {!mensageCookie && <CookiesBoxAlert onClick={confirmCookies}/>}
            </body>
        </html>
    );
}
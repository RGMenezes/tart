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
            <head>
                <title>TART</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Portfólio da TART — soluções digitais sob medida: sites, sistemas e experiências digitais com identidade, agilidade e qualidade." />
                <meta name="keywords" content="TART, soluções digitais, portfólio de sites, sistemas personalizados, desenvolvimento web, design digital, aluguel de sites" />
                <meta name="author" content="TART" />
                <meta name="robots" content="index, follow" />
                <meta name="google-site-verification" content="VbY6inD0kiGTxvEjGnOg6NenCwbxMvgKIwpms4PhWPk" />

                <meta property="og:title" content="Portfólio TART — Soluções Digitais Personalizadas" />
                <meta property="og:description" content="Conheça os projetos da TART: sites e sistemas desenvolvidos com foco em identidade, performance e funcionalidade." />
                <meta property="og:image" content="https://instagram.fgig6-1.fna.fbcdn.net/v/t51.2885-19/441146938_974830270886098_8626173301038032293_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fgig6-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHqzxlZhiL2GtKY89-Z3PkXMaX2uLHN2AVNKmLHhe-GU_VbXzXfDuEnIl012EuJLHY&_nc_ohc=JZkXkZJ-7sgQ7kNvwHGqLvw&_nc_gid=Ch0O1M6rsls9Tb7aJk7e7Q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfWGMzGxXhBTSABLoOa6Yd0sLSD33gdxlA0mHOg9f3J2Tw&oe=689AE4C3&_nc_sid=8b3546" />
                <meta property="og:url" content="https://tart.vercel.app" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfólio TART — Soluções Digitais Personalizadas" />
                <meta name="twitter:description" content="Sites, sistemas e produtos digitais criados com propósito e personalidade." />
                <meta name="twitter:image" content="https://instagram.fgig6-1.fna.fbcdn.net/v/t51.2885-19/441146938_974830270886098_8626173301038032293_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fgig6-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHqzxlZhiL2GtKY89-Z3PkXMaX2uLHN2AVNKmLHhe-GU_VbXzXfDuEnIl012EuJLHY&_nc_ohc=JZkXkZJ-7sgQ7kNvwHGqLvw&_nc_gid=Ch0O1M6rsls9Tb7aJk7e7Q&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfWGMzGxXhBTSABLoOa6Yd0sLSD33gdxlA0mHOg9f3J2Tw&oe=689AE4C3&_nc_sid=8b3546" />
            </head>
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
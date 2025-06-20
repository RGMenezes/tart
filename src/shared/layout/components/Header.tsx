"use client";

import styles from "../styles/Header.module.css";
import { Dispatch, SetStateAction } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { setCookie } from "@/utils/cookie";
import { LinkInternal, LinkInternalIcon } from "@/shared/link";
import { Logo } from "@/shared/icon";
import { ButtonIcon } from "@/shared/button";

export default function Header({theme, setTheme}: {theme: string, setTheme: Dispatch<SetStateAction<string>>}){
    const handleTheme = () => {
        const newTheme = theme === "theme_black" ? "theme_white" : "theme_black";
        setCookie("theme", newTheme, 30);
        setTheme(newTheme);
    };
    return(
        <header className={styles.header}>
            <LinkInternalIcon href='/'>
                <Logo className={styles.logo}/>
            </LinkInternalIcon>
      
            <ul className={styles.list_container}>
                <li>
                    <LinkInternal type='strong' href='/redes_sociais'>Redes sociais</LinkInternal>
                </li>
                <li>
                    <LinkInternal type='strong' href='/contato'>Contato</LinkInternal>
                </li>
                {/* <li>
          <LinkInternal type='strong' href='/projetos'>Projetos</LinkInternal>
        </li> */}
            </ul>

            <ButtonIcon onClick={handleTheme}>
                {theme === "theme_black" ? 
                    <BsSun className={styles.icon}/>
                    :
                    <BsMoon className={styles.icon}/>
                }
            </ButtonIcon>
        </header>
    );
}
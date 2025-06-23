"use client";

import styles from "../styles/Header.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { LinkInternal, LinkInternalIcon } from "@/shared/link";
import { Logo } from "@/shared/icon";
import { ButtonIcon } from "@/shared/button";

export default function  Header({theme, onClick}: {theme: boolean, onClick: () => void}){
    return(
        <header className={styles.header}>
            <LinkInternalIcon href='/'>
                <Logo className={styles.logo}/>
            </LinkInternalIcon>
      
            <ul className={styles.list_container}>
                {/* <li>
                    <LinkInternal type='strong' href='/redes_sociais'>Redes sociais</LinkInternal>
                </li> */}
                <li>
                    <LinkInternal type='strong' href='/contato'>Contato</LinkInternal>
                </li>
                {/* <li>
                    <LinkInternal type='strong' href='/projetos'>Projetos</LinkInternal>
                </li> */}
            </ul>

            <ButtonIcon onClick={onClick}>
                {theme ? <BsSun className={styles.icon}/> : <BsMoon className={styles.icon}/>}
            </ButtonIcon>
        </header>
    );
}
"use client";

import styles from "../styles/CookiesBoxAlert.module.css";
import { ICookieBoxAlertProps } from "../types/CookieBoxAlert.types";
import { Button } from "@/shared/button";
import { setCookie } from "@/utils/cookie";

export default function  CookiesBoxAlert({setMensageCookie}: ICookieBoxAlertProps){
    const confirmCookie = () => {
        setCookie("cookie", "true", 30);
        setMensageCookie("true");
    };
    return(
        <div className={styles.container}>
            <h4>Aviso de Cookies:</h4>
            <p>Este site utiliza cookies para gerenciar temas e armazenar sua confirmação de consentimento. Ao continuar navegando neste site, você concorda com o uso de cookies conforme descrito em nossa política de privacidade.</p>
            <div className={styles.container_button}>
                <Button onClick={confirmCookie}>Confirmar</Button>
            </div>
        </div>
    );
}
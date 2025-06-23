"use client";

import styles from "../styles/CookiesBoxAlert.module.css";
import { Button } from "@/shared/button";
import { ICookiesBoxAlert } from "../types/ICookiesBoxAlert.types";

export default function CookiesBoxAlert({onClick}: ICookiesBoxAlert){
    return(
        <div className={styles.container}>
            <h4>Aviso de Cookies:</h4>
            <p>Este site utiliza cookies para gerenciar temas e armazenar sua confirmação de consentimento. Ao continuar navegando neste site, você concorda com o uso de cookies conforme descrito em nossa política de privacidade.</p>
            <div className={styles.container_button}>
                <Button className={styles.buttonBlack} onClick={onClick}>Confirmar</Button>
            </div>
        </div>
    );
}
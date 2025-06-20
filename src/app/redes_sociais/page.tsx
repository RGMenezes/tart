import { Article } from "@/shared/layout";
import styles from "./page.module.css";
import { BsEnvelopeAt, BsInstagram } from "react-icons/bs";
import { LinkExternalButton, LinkInternalButton } from "@/shared/link";
import { Logo } from "@/shared/icon";

export default function Sobre(){
    return(
        <main className={styles.main}>
            <Article className={styles.article_container}>
                <h1>Entre em contato</h1>

                <LinkExternalButton fullWidth rel='noopener' type='gradient' href='mailto:tart.a.r.contato@gmail.com'>
                    <BsEnvelopeAt /> Mensagem por E-mail
                </LinkExternalButton>
                <LinkExternalButton fullWidth  lang={undefined} target='_blank' type='gradient' href='https://www.instagram.com/tart_oficial/'>
                    <BsInstagram /> Mensagem por Direct
                </LinkExternalButton>
            </Article>

            <Article className={styles.article_container}>
                <h1>Redes Sociais</h1>

                <LinkInternalButton fullWidth type='highlight' href='/'>
                    <Logo className={styles.logo_icon} /> tartoficial.vercel.app
                </LinkInternalButton>
                <LinkExternalButton fullWidth  lang={undefined} target='_blank' type='highlight' href='https://www.instagram.com/tart_oficial/'>
                    <BsInstagram /> @tart_oficial
                </LinkExternalButton>
            </Article>
        </main>
    );
}
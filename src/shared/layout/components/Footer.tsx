import styles from "../styles/Footer.module.css";
import { Logo } from "@/shared/icon";
import Section from "./Section";
import { LinkExternal, LinkInternal } from "@/shared/link/";

export default function Footer(){
    return(
        <footer>
            <section className={styles.ad_section}>
                <p className={`${styles.ad_text} ${styles.ad_text0}`}>Versatilidade</p>
                <p className={`${styles.ad_text} ${styles.ad_text1}`}>Criatividade</p>
                <p className={`${styles.ad_text} ${styles.ad_text2}`}>Tecnologia</p>
                <p className={`${styles.ad_text} ${styles.ad_text3}`}>Autenticidade</p>
                <p className={`${styles.ad_text} ${styles.ad_text4}`}>Conexão</p>
            </section>

            <Section className={styles.content_container}>
                <Logo className={styles.logo}/>
                <ul className={styles.list_container}>
                    <li><LinkInternal href='/sobre'>Sobre</LinkInternal></li>
                    <li><LinkInternal href='/'>Home</LinkInternal></li>
                    <li><LinkInternal href='/contato'>Contato</LinkInternal></li>
                    {/* <li><LinkInternal href='/projetos'>Projetos</LinkInternal></li> */}
                </ul>
                <p>E-mail:<br/><LinkExternal type='strong' href='mailto:tart.a.r.contato@gmail.com'>tart.a.r.contato@gmail.com</LinkExternal></p>
                <h5>© TART | {new Date().getFullYear()}</h5>
            </Section>
        </footer>
    );
}
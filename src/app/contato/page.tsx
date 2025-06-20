import imageAd from "@public/image/site/contact_page.png";
import styles from "./page.module.css";
import { WrapperAdvertisement } from "@/shared/wrapper";
import { contact } from "@/data/showcase";
import { LinkExternal, LinkExternalButton } from "@/shared/link";
import { Article, Section } from "@/shared/layout";
import { BsEnvelopeAt, BsInstagram } from "react-icons/bs";

export default function Contato(){
    return(
        <main className={styles.main}>
            <h1>Contato</h1>

            <WrapperAdvertisement imageSizeWidth className={styles.ad_container} image={imageAd} alt='Jovem usando um notebook sentado'>
                <h2>{contact.title}</h2>
                <p><strong>{contact.paragraph}</strong></p>
                <LinkExternal type='slim' className={styles.image_link} lang={undefined} target='_blank' href='https://www.rawpixel.com/'>
          Image by rawpixel.com
                </LinkExternal>
            </WrapperAdvertisement>

            <Section>
                <Article>
                    <LinkExternalButton type='highlight' rel='noopener' href='mailto:tart.a.r.contato@gmail.com'>
                        <BsEnvelopeAt /> Mensagem por E-mail
                    </LinkExternalButton>
                    <LinkExternalButton lang={undefined} target='_blank' type='highlight' href='https://www.instagram.com/tart_oficial/'>
                        <BsInstagram /> Mensagem por Direct
                    </LinkExternalButton>
                </Article>
            </Section>
        </main>
    );
}
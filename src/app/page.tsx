"use client";

import styles from "./page.module.css";
import imageAd from "@public/image/site/home_page.png";
import { WrapperAdvertisement, WrapperHighlight } from "@/shared/wrapper";
import { Section } from "@/shared/layout";
import { Card, CardProjetc } from "@/shared/card";
import { gestorFinenceiro, trainingTimer, vee } from "@/data/projects";
import { LinkExternal, LinkInternal, LinkInternalButton } from "@/shared/link";
import { lending } from "@/data/showcase";
import { BsArrowRight, BsChatDots, BsCodeSlash, BsTools } from "react-icons/bs";
import { TeamSummary } from "@/modules/team";

export default function Home(){
    return(
        <main>
            <WrapperHighlight 
                href={"projetos/gestorFinanceiro"} 
                imagePortrait={gestorFinenceiro.images.portrait[0]} 
                imageLandscap={gestorFinenceiro.images.landscape[0]} 
                alt={gestorFinenceiro.images.alt}
            />

            <Section className={styles.container}>
                <h1>Projetos</h1>

                <CardProjetc 
                    image={gestorFinenceiro.images.cover}
                    alt={gestorFinenceiro.images.alt}
                >
                    <h3>{gestorFinenceiro.title}</h3>
                    <p className='p_small'>{gestorFinenceiro.content.summary}</p>
                    <LinkInternal type='highlight' href={"projetos/gestorFinanceiro"}>{gestorFinenceiro.content.cta}</LinkInternal>
                </CardProjetc>

                <CardProjetc 
                    image={vee.images.cover}
                    alt={vee.images.alt}
                    left
                >
                    <h3>{vee.title}</h3>
                    <p className='p_small'>{vee.content.summary}</p>
                    <LinkInternal type='highlight' href={"projetos/vee"}>{vee.content.cta}</LinkInternal>
                </CardProjetc>

                <CardProjetc 
                    image={trainingTimer.images.cover}
                    alt={trainingTimer.images.alt}
                >
                    <h3>{trainingTimer.title}</h3>
                    <p className='p_small'>{trainingTimer.content.summary}</p>
                    <LinkInternal type='highlight' href={"projetos/trainingTimer"}>{trainingTimer.content.cta}</LinkInternal>
                </CardProjetc>
            </Section>

            <WrapperAdvertisement className={styles.ad_container} image={imageAd} alt='Jovem segurando um notebook em pé'>
                <h2>{lending.add.title}</h2>
                <p><strong>{lending.add.paragraph}</strong></p>
                <LinkInternalButton href='/contato'>{lending.add.cta}<BsArrowRight /></LinkInternalButton>

                <LinkExternal type='slim' className={styles.image_link}  lang={undefined} target='_blank' href='https://www.rawpixel.com/'>
                    Image by rawpixel.com
                </LinkExternal>
            </WrapperAdvertisement>

            <Section className={`${styles.container} ${styles.cotainer_flex_row_center}`}>
                <h1>Serviços</h1>

                <div className={styles.service_container}>
                    <Card>
                        <BsCodeSlash className={styles.big_icon}/>
                        <h3>{lending.card1.title}</h3>
                        <p className='p_small'>{lending.card1.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.card1.cta} <BsArrowRight /></LinkInternal>
                    </Card>

                    <Card>
                        <BsChatDots className={styles.big_icon}/>
                        <h3>{lending.card2.title}</h3>
                        <p className='p_small'>{lending.card2.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.card2.cta} <BsArrowRight /></LinkInternal>
                    </Card>

                    <Card>
                        <BsTools className={styles.big_icon}/>
                        <h3>{lending.card3.title}</h3>
                        <p className='p_small'>{lending.card3.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.card3.cta} <BsArrowRight /></LinkInternal>
                    </Card>
                </div>
            </Section>

            <TeamSummary />
        </main>
    );
}
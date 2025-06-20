"use client";

import styles from "./page.module.css";
import imageAd from "@public/image/site/home_page.png";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookie";
import { WrapperAdvertisement, WrapperHighlight } from "@/shared/wrapper";
import { CookiesBoxAlert, Section } from "@/shared/layout";
import { Card, CardProjetc } from "@/shared/card";
import { gestorFinenceiro } from "@/data/projects";
import { LinkExternal, LinkInternal, LinkInternalButton } from "@/shared/link";
import { lending } from "@/data/showcase";
import { BsArrowRight, BsGraphUpArrow, BsLaptop, BsTools } from "react-icons/bs";

export default function Home(){
    const [mensageCookie, setMensageCookie] = useState("true");
    useEffect(() => {setMensageCookie(getCookie("cookie") ?? "");}, []);

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
                    <LinkInternal type='highlight' href={"projetos/yakuwariSekai"}>{gestorFinenceiro.content.cta}</LinkInternal>
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
                        <BsLaptop className={styles.big_icon}/>
                        <h3>{lending.rent.title}</h3>
                        <p className='p_small'>{lending.rent.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.rent.cta} <BsArrowRight /></LinkInternal>
                    </Card>

                    <Card>
                        <BsGraphUpArrow className={styles.big_icon}/>
                        <h3>{lending.analysis.title}</h3>
                        <p className='p_small'>{lending.analysis.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.analysis.cta} <BsArrowRight /></LinkInternal>
                    </Card>

                    <Card>
                        <BsTools className={styles.big_icon}/>
                        <h3>{lending.others.title}</h3>
                        <p className='p_small'>{lending.others.paragraph}</p>
                        <LinkInternal className={styles.service_link} type='highlight' href='/contato'>{lending.others.cta} <BsArrowRight /></LinkInternal>
                    </Card>
                </div>
            </Section>

            {mensageCookie != "true" && <CookiesBoxAlert setMensageCookie={setMensageCookie} />}
        </main>
    );
}
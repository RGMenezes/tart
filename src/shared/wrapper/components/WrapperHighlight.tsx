"use client";

import Image from "next/image";
import styles from "../styles/WrapperHighlight.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IWrapperHighlight } from "../types/WrapperHighlight.types";

export default function WrapperHighlight({ imagePortrait, imageLandscap, alt, href }: IWrapperHighlight){
    const [windowWidth, setWindowWidth] = useState(0);
    const router = useRouter();

    const handleImage = () => router.push(href);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        if(typeof window !== "undefined"){
            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return(
        <>{ windowWidth < 769 ?
            <section className={styles.container} style={{backgroundImage: `url(${imagePortrait.src})`}}>
                <div className={styles.filter}></div>
                <Image 
                    onClick={handleImage}
                    onKeyDown={(e) => e.key === "Enter" && handleImage()}
                    tabIndex={0} className={styles.image} alt={alt} src={imagePortrait} 
                />
            </section>
            :
            <section className={styles.container} style={{backgroundImage: `url(${imageLandscap.src})`}}>
                <div className={styles.filter}></div>
                <Image 
                    onClick={handleImage}
                    onKeyDown={(e) => e.key === "Enter" && handleImage()}
                    tabIndex={0} className={styles.image} alt={alt} src={imageLandscap} 
                />
            </section>
        }</>
    );
}
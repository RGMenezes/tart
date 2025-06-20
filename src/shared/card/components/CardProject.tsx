import Image from "next/image";
import styles from "../styles/CardProject.module.css";
import { ICardProject } from "../types/Card.types";

export default function CardProjetc({children, image, className, left, alt}: ICardProject){
    return(
        <article className={`${styles.container} ${className}`}>
            {!left && <div className={styles.children_container}>{children}</div>}
            <Image className={styles.image} src={image} alt={alt}/>
            {left && <div className={styles.children_container}>{children}</div>}
        </article>
    );
}
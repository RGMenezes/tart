import { ICard } from "../types/Card.types";
import styles from "../styles/Card.module.css";

export default function Card({children, className, defaultStyle}: ICard){
    return(
        <article className={`${defaultStyle ? styles.dafault : styles.article} ${className}`}>{children}</article>
    );
}
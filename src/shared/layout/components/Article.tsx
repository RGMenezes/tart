import styles from "../styles/Article.module.css";
import { IContainer } from "../types/Container.types";

export default function Article({children, className}: IContainer){
    return(
        <article className={`${styles.article} ${className}`}>
            {children}
        </article>
    );
}
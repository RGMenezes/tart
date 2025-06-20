import styles from "../styles/Section.module.css";
import { IContainer } from "../types/Container.types";

export default function Section({children, className}: IContainer){
    return(
        <section className={`${className} ${styles.container}`}>
            {children}
        </section>
    );
}
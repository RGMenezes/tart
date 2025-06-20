import { Article, Section } from "@/shared/layout";
import styles from "./page.module.css";
import { about } from "@/data/showcase";

export default function Sobre(){
    return(
        <main className={styles.main}>
            <h1>Sobre a TART</h1>
            <Section>
                {about.map((item, index) => (
                    <Article key={`${item.title}_${index}`}>
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                    </Article>
                ))}
            </Section>
        </main>
    );
}
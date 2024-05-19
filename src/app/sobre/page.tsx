import Section from '@/components/layouts/Section';
import styles from './page.module.css';
import Article from '@/components/layouts/Article';
import aboutText from '@/texts/aboutText';

export default function Sobre(){
  return(
    <main className={styles.main}>
      <h1>Sobre a TART</h1>
      <Section>
        {aboutText.about.map((item, index) => (
          <Article key={`${item.title}_${index}`}>
            <h2>{item.title}</h2>
            <p>{item.paragraph}</p>
          </Article>
        ))}
      </Section>
    </main>
  );
};
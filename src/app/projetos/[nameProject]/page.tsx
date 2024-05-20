import Section from '@/components/layouts/Section';
import styles from './page.module.css';
import adText from '@/texts/adText';
import Article from '@/components/layouts/Article';
import ButtonLink from '@/components/link/ButtonLink';
import { BsArrowRight } from 'react-icons/bs';

export default function Projetos({params: {nameProject}}: {params: {nameProject: string}}){
  const project = decodeURIComponent(nameProject);
  return(
    <main className={styles.main}>
      <h1>{project}</h1>
      
      <Section className={styles.content_section}>

      </Section>

      <Section className={styles.assessment_section}>
        <Article className={styles.assessment_article}>
          <h2>{adText.project.title}</h2>
          <p>{adText.project.paragraph}</p>
          <ButtonLink type='highlight' to='/contato'>{adText.project.cta} <BsArrowRight /></ButtonLink>
        </Article>
      </Section>
    </main>
  );
};
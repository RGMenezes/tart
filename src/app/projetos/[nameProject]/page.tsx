import Section from '@/components/layouts/Section';
import styles from './page.module.css';

export default function Projetos({params: {nameProject}}: {params: {nameProject: string}}){
  const project = decodeURIComponent(nameProject);
  return(
    <main className={styles.main}>
      <h1>{project}</h1>
      <Section>

      </Section>
    </main>
  );
};
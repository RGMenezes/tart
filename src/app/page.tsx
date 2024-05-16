'use client';

import styles from './page.module.css';
import HighlightCard from '@/components/cards/HighlightCard';
import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';
import Section from '@/components/layouts/Section';
import ProjectCard from '@/components/cards/ProjectCard';

export default function Home(){
  return(
    <main>
      <HighlightCard 
        to='/projetos/yakuwariSekai' 
        imagePortrait={imageYSPortrait} 
        imageLandscap={imageYSLandscap} 
        alt='Imagem da home page do projeto yakuwari sekai.'
      />

      <Section className={styles.container}>
        <h1>Projetos</h1>

        <ProjectCard 
          imagePortrait={imageYSPortrait}
          imageLandscap={imageYSLandscap}
          alt='Imagem do projeto yakuwari sekai.'
        >
          <h1>Yakuwari Sekai</h1>
          <p>Yakuwari Sekai é uma plataforma online onde os amantes de RPGs Narrados se encontram para desfrutar de épicas e enigmáticas aventuras.</p>
        </ProjectCard>
      </Section>
    </main>
  );
};
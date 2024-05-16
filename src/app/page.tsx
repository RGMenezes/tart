'use client';

import styles from './page.module.css';
import HighlightCard from '@/components/cards/HighlightCard';
import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';
import Section from '@/components/layouts/Section';

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

        <p>ola</p>
        <p>ola</p>
      </Section>
    </main>
  );
};
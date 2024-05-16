'use client';

import styles from './page.module.css';
import HighlightCard from '@/components/cards/HighlightCard';
import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';

export default function Home(){
  return(
    <main className={styles.container}>
      <HighlightCard 
        to='/projetos/yakuwariSekai' 
        imagePortrait={imageYSPortrait} 
        imageLandscap={imageYSLandscap} 
        alt='Imagem da home page do projeto yakuwari sekai.'
      />

    </main>
  );
};
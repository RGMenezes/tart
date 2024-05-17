'use client';

import styles from './page.module.css';
import HighlightContainer from '@/components/containers/HighlightContainer';
import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';
import imageAd from '@public/assets/tart/home_page.png';
import Section from '@/components/layouts/Section';
import ProjectCard from '@/components/cards/ProjectCard';
import TextLink from '@/components/link/TextLink';
import AdvertisementContainer from '@/components/containers/AdvertisementContainer';
import ButtonLink from '@/components/link/ButtonLink';
import { BsArrowRight } from 'react-icons/bs';

export default function Home(){
  return(
    <main>
      <HighlightContainer 
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
          <h3>Yakuwari Sekai</h3>
          <p className={styles.project_paragraph}>
            Yakuwari Sekai é uma plataforma online onde os amantes de RPGs Narrados se encontram para desfrutar de épicas e enigmáticas aventuras.
          </p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>Ver mais +</TextLink>
        </ProjectCard>

        <ProjectCard 
          imagePortrait={imageYSPortrait}
          imageLandscap={imageYSLandscap}
          alt='Imagem do projeto yakuwari sekai.'
          left={false}
        >
          <h3>Yakuwari Sekai</h3>
          <p className={styles.project_paragraph}>
            Yakuwari Sekai é uma plataforma online onde os amantes de RPGs Narrados se encontram para desfrutar de épicas e enigmáticas aventuras.
          </p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>Ver mais +</TextLink>
        </ProjectCard>

        <ProjectCard 
          imagePortrait={imageYSPortrait}
          imageLandscap={imageYSLandscap}
          alt='Imagem do projeto yakuwari sekai.'
        >
          <h3>Yakuwari Sekai</h3>
          <p className={styles.project_paragraph}>
            Yakuwari Sekai é uma plataforma online onde os amantes de RPGs Narrados se encontram para desfrutar de épicas e enigmáticas aventuras.
          </p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>Ver mais +</TextLink>
        </ProjectCard>
      </Section>

      <AdvertisementContainer className={styles.ad_container} image={imageAd} alt='Jovem'>
        <h2>Desperte Novas Possibilidades!</h2>
        <p>
          <strong>
            Explore novas oportunidades e leve seu negócio para o próximo nível. Estamos aqui para transformar suas ideias em realidade e impulsionar seu sucesso online. Entre em contato conosco agora para descobrir como podemos fazer a diferença para você e começar a criar juntos!
          </strong>
        </p>
        <ButtonLink to='/contato'>Começar agora <BsArrowRight /></ButtonLink>
      </AdvertisementContainer>
    </main>
  );
};
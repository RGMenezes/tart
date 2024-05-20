'use client';

import styles from './page.module.css';
import HighlightContainer from '@/components/containers/HighlightContainer';
import imageAd from '@public/assets/tart/home_page.png';
import Section from '@/components/layouts/Section';
import ProjectCard from '@/components/cards/ProjectCard';
import TextLink from '@/components/link/TextLink';
import AdvertisementContainer from '@/components/containers/AdvertisementContainer';
import ButtonLink from '@/components/link/ButtonLink';
import { BsArrowRight, BsGraphUpArrow, BsInstagram, BsLaptop, BsTools } from 'react-icons/bs';
import Card from '@/components/cards/Card';
import adText from '@/texts/adText';
import projectText from '@/texts/projectText';
import serviceText from '@/texts/serviceText';
import DefaultCard from '@/components/cards/DefaultCard';
import LogoYS from '@/components/svg/LogoYS';
import assessmentText from '@/texts/assessmentText';
import { useEffect, useState } from 'react';
import SectionLink from '@/components/link/SectionLink';

export default function Home(){
  const [assessmentAnimation, setAssessmentAnimation] = useState(
    ['assessment_default', 'assessment_right', 'assessment_right_right', 'assessment_left_left', 'assessment_left']
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAssessmentAnimation(prevState => {
        let copyAdAnimationArray = [...prevState];
        let element0 = copyAdAnimationArray.shift();
        if(element0) copyAdAnimationArray.push(element0);
        return copyAdAnimationArray;
      });
    }, 100 * 60 * 3);

    return () => clearInterval(intervalId);
  }, [assessmentAnimation]);

  return(
    <main>
      <HighlightContainer 
        to='/projetos/yakuwariSekai' 
        imagePortrait={projectText.yakuwariSekai.imagePortrait[0]} 
        imageLandscap={projectText.yakuwariSekai.imageLandescap[0]} 
        alt={projectText.yakuwariSekai.imageAlt}
      />

      <Section className={styles.container}>
        <h1>Projetos</h1>

        <ProjectCard 
          imagePortrait={projectText.yakuwariSekai.imagePortrait[0]}
          imageLandscap={projectText.yakuwariSekai.imageLandescap[0]}
          alt={projectText.yakuwariSekai.imageAlt}
        >
          <h3>{projectText.yakuwariSekai.title}</h3>
          <p className='p_small'>{projectText.yakuwariSekai.paragraph}</p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>{projectText.yakuwariSekai.cta}</TextLink>
        </ProjectCard>

        <ProjectCard 
          imagePortrait={projectText.yakuwariSekai.imagePortrait[0]}
          imageLandscap={projectText.yakuwariSekai.imageLandescap[0]}
          alt={projectText.yakuwariSekai.imageAlt}
          left={false}
        >
          <h3>{projectText.yakuwariSekai.title}</h3>
          <p className='p_small'>{projectText.yakuwariSekai.paragraph}</p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>{projectText.yakuwariSekai.cta}</TextLink>
        </ProjectCard>

        <ProjectCard 
          imagePortrait={projectText.yakuwariSekai.imagePortrait[0]}
          imageLandscap={projectText.yakuwariSekai.imageLandescap[0]}
          alt={projectText.yakuwariSekai.imageAlt}
        >
          <h3>{projectText.yakuwariSekai.title}</h3>
          <p className='p_small'>{projectText.yakuwariSekai.paragraph}</p>
          <TextLink type='highlight' to='/projetos/yakuwariSekai'>{projectText.yakuwariSekai.cta}</TextLink>
        </ProjectCard>
      </Section>

      <AdvertisementContainer className={styles.ad_container} image={imageAd} alt='Jovem segurando um notebook em pé'>
        <h2>{adText.home.title}</h2>
        <p><strong>{adText.home.paragraph}</strong></p>
        <ButtonLink to='/contato'>{adText.home.cta}<BsArrowRight /></ButtonLink>
      </AdvertisementContainer>

      <Section className={`${styles.container} ${styles.cotainer_flex_row_center}`}>
        <h1>Serviços</h1>

        <div className={styles.service_container}>
          <Card>
            <BsLaptop className={styles.big_icon}/>
            <h3>{serviceText.rent.title}</h3>
            <p className='p_small'>{serviceText.rent.paragraph}</p>
            <TextLink className={styles.service_link} type='highlight' to='/contato'>{serviceText.rent.cta} <BsArrowRight /></TextLink>
          </Card>

          <Card>
            <BsGraphUpArrow className={styles.big_icon}/>
            <h3>{serviceText.analysis.title}</h3>
            <p className='p_small'>{serviceText.analysis.paragraph}</p>
            <TextLink className={styles.service_link} type='highlight' to='/contato'>{serviceText.analysis.cta} <BsArrowRight /></TextLink>
          </Card>

          <Card>
            <BsTools className={styles.big_icon}/>
            <h3>{serviceText.others.title}</h3>
            <p className='p_small'>{serviceText.others.paragraph}</p>
            <TextLink className={styles.service_link} type='highlight' to='/contato'>{serviceText.others.cta} <BsArrowRight /></TextLink>
          </Card>
        </div>
      </Section>

      <Section className={styles.assessment_section}>
        <div className={styles.assessment_container}>
          <DefaultCard className={`${styles.assessment} ${styles[assessmentAnimation[0]]}`}>
            <LogoYS className={styles.assessment_logo}/>
            <h2>{assessmentText.YakuwariSekai.title}</h2>
            <p>{assessmentText.YakuwariSekai.paragraph}</p>
          </DefaultCard>

          <DefaultCard className={`${styles.assessment} ${styles[assessmentAnimation[1]]}`}>
            <LogoYS className={styles.assessment_logo}/>
            <h2>{assessmentText.YakuwariSekai.title}1</h2>
            <p>{assessmentText.YakuwariSekai.paragraph}</p>
          </DefaultCard>

          <DefaultCard className={`${styles.assessment} ${styles[assessmentAnimation[2]]}`}>
            <LogoYS className={styles.assessment_logo}/>
            <h2>{assessmentText.YakuwariSekai.title}2</h2>
            <p>{assessmentText.YakuwariSekai.paragraph}</p>
          </DefaultCard>

          <DefaultCard className={`${styles.assessment} ${styles[assessmentAnimation[3]]}`}>
            <LogoYS className={styles.assessment_logo}/>
            <h2>{assessmentText.YakuwariSekai.title}3</h2>
            <p>{assessmentText.YakuwariSekai.paragraph}</p>
          </DefaultCard>

          <DefaultCard className={`${styles.assessment} ${styles[assessmentAnimation[4]]}`}>
            <LogoYS className={styles.assessment_logo}/>
            <h2>{assessmentText.YakuwariSekai.title}4</h2>
            <p>{assessmentText.YakuwariSekai.paragraph}</p>
          </DefaultCard>
        </div>
        <ButtonLink type='highlight' to='/contato'>Junte-se agora <BsArrowRight /></ButtonLink>
      </Section>

      <Section className={styles.social_section}>
        <SectionLink target='_blank' rel='external' className={styles.social_container} to='https://www.instagram.com/tart_oficial/'>
          <BsInstagram className={styles.big_icon}/>
          <h5>@tart_oficial</h5>
        </SectionLink>
      </Section>
    </main>
  );
};
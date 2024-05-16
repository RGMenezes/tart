'use client';

import Image, { StaticImageData } from 'next/image';

import styles from './HighlightCard.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HighlightCard(
  {imagePortrait, imageLandscap, alt, to}: 
  {imagePortrait: StaticImageData, imageLandscap: StaticImageData, alt: string, to: string}
){
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const router = useRouter();

  const handleImage = () => router.push(to);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return(
    <>{ windowWidth < 769 ?
      <section className={styles.container} style={{backgroundImage: `url(${imagePortrait.src})`}}>
        <div className={styles.filter}></div>
        <Image 
          onClick={handleImage}
          onKeyDown={(e) => e.key === 'Enter' && handleImage()}
          tabIndex={0} className={styles.image} alt={alt} src={imagePortrait} 
        />
      </section>
      :
      <section className={styles.container} style={{backgroundImage: `url(${imageLandscap.src})`}}>
        <div className={styles.filter}></div>
        <Image 
          onClick={handleImage}
          onKeyDown={(e) => e.key === 'Enter' && handleImage()}
          tabIndex={0} className={styles.image} alt={alt} src={imageLandscap} 
        />
      </section>
    }</>
  );
};
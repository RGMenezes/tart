'use client';

import Image, { StaticImageData } from 'next/image';

import styles from './HighlightContainer.module.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function HighlightContainer(
  {imagePortrait, imageLandscap, alt, to}: 
  {imagePortrait: StaticImageData, imageLandscap: StaticImageData, alt: string, to: string}
){
  const [windowWidth, setWindowWidth] = useState(0);
  const router = useRouter();

  const handleImage = () => router.push(to);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if(typeof window !== 'undefined'){
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };
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
'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';
import { useEffect, useState } from 'react';

export default function ProjectCard(
  {children, imageLandscap, imagePortrait, className, left = true, alt}: 
  {children: React.ReactNode, imagePortrait: StaticImageData, imageLandscap: StaticImageData, className?: string, left?: boolean, alt: string}
){
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    if(typeof window !== 'undefined'){
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <article className={`${styles.container} ${className}`}>
      {!left && <div className={styles.children_container}>{children}</div>}
      { windowWidth < 769 ?
        <Image className={styles.image} src={imagePortrait} alt={alt}/>
        :
        <Image className={styles.image} src={imageLandscap} alt={alt}/>
      }
      {left && <div className={styles.children_container}>{children}</div>}
    </article>
  );
};
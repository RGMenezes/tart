import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';
import { useEffect, useState } from 'react';

export default function ProjectCard(
  {children, image, className, left = true, alt}: 
  {children: React.ReactNode, image: StaticImageData, className?: string, left?: boolean, alt: string}
){

  return(
    <article className={`${styles.container} ${className}`}>
      {!left && <div className={styles.children_container}>{children}</div>}
      <Image className={styles.image} src={image} alt={alt}/>
      {left && <div className={styles.children_container}>{children}</div>}
    </article>
  );
};
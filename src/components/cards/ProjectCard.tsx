import Image, { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';

export default function ProjectCard(
  {children, imageLandscap, imagePortrait, className, left = true, alt}: 
  {children: React.ReactNode, imagePortrait: StaticImageData, imageLandscap: StaticImageData, className?: string, left?: boolean, alt: string}
){
  return(
    <article className={`${styles.container} ${className}`}>
      <Image className={styles.image} src={imagePortrait} alt={alt} />
      <div className={styles.children_container}>
        {children}
      </div>
    </article>
  );
};
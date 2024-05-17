import Image, { StaticImageData } from 'next/image';
import styles from './AdContainer.module.css';

export default function AdContainer(
  {children, image, className, alt}: 
  {children?: React.ReactNode, image?: StaticImageData, className?: string, alt?: string}
){
  return(
    <section className={`${styles.ad_container} ${className}`}>
      <article className={styles.children_container}>{children}</article>
      {(image && alt) && <Image className={styles.image} src={image} alt={alt}/>}
    </section>
  );
};
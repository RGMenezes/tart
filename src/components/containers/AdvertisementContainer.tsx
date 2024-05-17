import styles from './AdvertisementContainer.module.css';
import Image, { StaticImageData } from 'next/image';

export default function AdvertisementContainer(
  {children, image, className, alt}: 
  {children?: React.ReactNode, image?: StaticImageData, className?: string, alt?: string}
){
  return(
    <section className={`${styles.section_container} ${className}`}>
      <article className={styles.children_container}>{children}</article>
      {(image && alt) && <Image className={styles.image} src={image} alt={alt}/>}
    </section>
  );
};
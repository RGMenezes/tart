import styles from "../styles/WrapperAdvertisement.module.css";
import Image from "next/image";
import { IWrapperAdvertisement } from "../types/WrapperAdvertisement.types";

export default function WrapperAdvertisement({ children, image, className, alt, imageSizeWidth }: IWrapperAdvertisement){
    return(
        <section className={`${styles.section_container} ${className}`}>
            <article className={styles.children_container}>{children}</article>
            {(image && alt) && <Image className={`${styles.image} ${imageSizeWidth && styles.image_size_width}`} src={image} alt={alt}/>}
        </section>
    );
}
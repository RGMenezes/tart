import styles from "../styles/ImageFrame.module.css";
import Image from "next/image";
import { IImageFrame } from "../types/ImageFrame.types";

export default function ImageFrame({src, alt}: IImageFrame){
    return <Image className={styles.image} width={80} height={80} src={src} alt={alt}/>;
}
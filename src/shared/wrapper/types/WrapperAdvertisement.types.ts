import { StaticImageData } from "next/image";

export interface IWrapperAdvertisement {
    children?: React.ReactNode;
    image?: StaticImageData;
    className?: string;
    alt?: string;
    imageSizeWidth?:boolean;
}
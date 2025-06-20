import { StaticImageData } from "next/image";

export interface IWrapperHighlight {
    imagePortrait: StaticImageData;
    imageLandscap: StaticImageData;
    alt: string;
    href: string;
}
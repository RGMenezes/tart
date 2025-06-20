import { StaticImageData } from "next/image";

export interface ICard {
    children: React.ReactNode;
    className?: string;
    defaultStyle?: boolean;
}

export interface ICardProject {
    children: React.ReactNode
    image: StaticImageData
    className?: string
    left?: boolean
    alt: string
}
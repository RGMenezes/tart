import LinkNext from "next/link";
import styles from "../styles/Link.module.css";
import { ILinkInternalProps } from "../types/Link.types";

export default function LinkInternal(props: ILinkInternalProps){
    return <LinkNext {...props as ILinkInternalProps} className={`${styles.link} ${props.type && styles[props.type]} ${props.className}`}>{props.children}</LinkNext>;
}
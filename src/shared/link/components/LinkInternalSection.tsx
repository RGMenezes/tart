import LinkNext from "next/link";
import styles from "../styles/LinkIcon.module.css";
import { ILinkInternalProps } from "../types/Link.types";

export default function LinkInternalSection(props: ILinkInternalProps){
    return <LinkNext {...props as ILinkInternalProps} className={`${styles.link} ${props.type && styles[props.type]} ${props.className}`}>{props.children}</LinkNext>;
}
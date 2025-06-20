import LinkNext from "next/link";
import styles from "../styles/LinkButton.module.css";
import { ILinkInternalProps } from "../types/Link.types";

export default function LinkInternalButton(props: ILinkInternalProps){
    return <LinkNext {...props as ILinkInternalProps} className={`${styles.link} ${props.type && styles[props.type]} ${props.fullWidth && styles.full_width}`}>{props.children}</LinkNext>;
}
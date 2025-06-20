import styles from "../styles/Link.module.css";
import { ILinkExternalProps } from "../types/Link.types";

export default function LinkExternal(props: ILinkExternalProps){
    return <a {...props as ILinkExternalProps} rel={props.rel ?? "external"} className={`${styles.link} ${props.type && styles[props.type]} ${props.className}`}>{props.children}</a>;
}
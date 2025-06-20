import styles from "../styles/LinkButton.module.css";
import { ILinkExternalProps } from "../types/Link.types";

export default function LinkExternalButton(props: ILinkExternalProps){
    return <a {...props as ILinkExternalProps} rel={props.rel ?? "external"} className={`${styles.link} ${props.type && styles[props.type]} ${props.fullWidth && styles.full_width}`}>{props.children}</a>;
}
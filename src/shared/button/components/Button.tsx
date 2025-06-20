import { IButtonProps } from "../types/Button.types";
import styles from "../styles/ButtonIcon.module.css";

export default function Button(props: IButtonProps){
    return(
        <button {...props} className={styles.button}>{props.children}</button>
    );
}
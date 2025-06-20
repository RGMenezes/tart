import styles from "../styles/WrapperScrollX.module.css";
import { IWrapper } from "../types/Wrapper.types";

export default function WrapperScrollX({ children, className }: IWrapper){
    return(
        <section className={`${styles.container} ${className}`}>
            {children}
        </section>
    );
}
import styles from './ScrollXContainer.module.css';

export default function ScrollXContainer({children, className}: {children?: React.ReactNode, className?: string}){
  return(
    <section className={`${styles.container} ${className}`}>
      {children}
    </section>
  );
};
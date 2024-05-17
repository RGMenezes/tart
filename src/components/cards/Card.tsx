import styles from './Card.module.css';

export default function Card({children, className}: {children: React.ReactNode, className?: string}){
  return(
    <article className={`${styles.article} ${className}`}>{children}</article>
  );
};
import styles from './DefaultCard.module.css';

export default function DefaultCard({children, className}: {children: React.ReactNode, className?: string}){
  return(
    <article className={`${styles.article} ${className}`}>{children}</article>
  );
};
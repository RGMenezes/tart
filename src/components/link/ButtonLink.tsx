import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink({to, type, children}: {children: React.ReactNode, to: string, type?: 'highlight'}){
  return(
    <Link hrefLang='pt-br' className={`${styles.link} ${type && styles[type]}`} href={to}>{children}</Link>
  );
};
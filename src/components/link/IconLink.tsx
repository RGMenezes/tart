import Link from 'next/link';
import styles from './IconLink.module.css';

export default function IconLink({to, children}: {children: React.ReactNode, to: string}){
  return(
    <Link hrefLang='pt-br' className={styles.link} href={to}>{children}</Link>
  );
};
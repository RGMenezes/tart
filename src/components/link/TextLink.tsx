import Link from 'next/link';
import styles from './TextLink.module.css';

export default function TextLink({to, type, children}: {children: React.ReactNode, to: string, type?: 'strong' | 'highlight'}){
  return(
    <Link hrefLang='pt-br' className={`${styles.link} ${type && styles[type]}`} href={to}>{children}</Link>
  );
};
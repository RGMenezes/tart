import Link from 'next/link';
import styles from './TextLink.module.css';

export default function TextLink({to, type, children, className}: {children: React.ReactNode, to: string, type?: 'strong' | 'highlight', className?: string}){
  return(
    <Link hrefLang='pt-br' className={`${styles.link} ${type && styles[type]} ${className}`} href={to}>{children}</Link>
  );
};
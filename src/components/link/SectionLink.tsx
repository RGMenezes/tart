import Link from 'next/link';
import styles from './SectionLink.module.css';

export default function SectionLink(
  {to, children, className, lang = 'pt-br', target, rel}: 
  {children: React.ReactNode, to: string, className?: string, lang?: string, target?: string, rel?: string}
){
  return(
    <Link hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${className}`} href={to}>{children}</Link>
  );
};
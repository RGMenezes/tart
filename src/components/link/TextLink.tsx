import Link from 'next/link';
import styles from './TextLink.module.css';

export default function TextLink(
  {to, type, children, className, a, lang = 'pt-br', target, rel}: 
  {children: React.ReactNode, to: string, type?: 'strong' | 'highlight', className?: string, a?: boolean, lang?: string, target?: string, rel?: string}
){
  return(
    <>{a ? 
      <a hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]} ${className}`} href={to}>{children}</a>
      :
      <Link hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]} ${className}`} href={to}>{children}</Link>
    }</>
  );
};
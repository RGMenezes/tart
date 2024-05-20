import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink(
  {to, type, children, lang = 'pt-br', target, rel, a}: 
  {children: React.ReactNode, to: string, type?: 'highlight', lang?: string, target?: string, rel?: string, a?: boolean}
){
  return(
    <>{a ? 
      <a hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]}`} href={to}>{children}</a>
      :
      <Link hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]}`} href={to}>{children}</Link>
    }</>
  );
};
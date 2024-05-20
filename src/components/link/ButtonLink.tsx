import Link from 'next/link';
import styles from './ButtonLink.module.css';

export default function ButtonLink(
  {to, type, children, lang = 'pt-br', target, rel, a, fullWidth}: 
  {children: React.ReactNode, to: string, type?: 'highlight' | 'gradient', lang?: string, target?: string, rel?: string, a?: boolean, fullWidth?: boolean}
){
  return(
    <>{a ? 
      <a hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]} ${fullWidth && styles.full_width}`} href={to}>{children}</a>
      :
      <Link hrefLang={lang} target={target} rel={rel} className={`${styles.link} ${type && styles[type]} ${fullWidth && styles.full_width}`} href={to}>{children}</Link>
    }</>
  );
};
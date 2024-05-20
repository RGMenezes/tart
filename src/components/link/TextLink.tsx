import Link from 'next/link';
import styles from './TextLink.module.css';

export default function TextLink(
  {to, type, children, className, a}: 
  {children: React.ReactNode, to: string, type?: 'strong' | 'highlight', className?: string, a?: boolean}
){
  return(
    <>{a ? 
      <a hrefLang='pt-br' className={`${styles.link} ${type && styles[type]} ${className}`} href={to}>{children}</a>
      :
      <Link hrefLang='pt-br' className={`${styles.link} ${type && styles[type]} ${className}`} href={to}>{children}</Link>
    }</>
  );
};
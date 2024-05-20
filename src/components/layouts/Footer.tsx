import TextLink from '../link/TextLink';
import Logo from '../svg/Logo';
import styles from './Footer.module.css';
import Section from './Section';

export default function Footer(){
  return(
    <footer>
      <section className={styles.ad_section}>
        <p className={`${styles.ad_text} ${styles.ad_text0}`}>TypeScript</p>
        <p className={`${styles.ad_text} ${styles.ad_text1}`}>MongoDb</p>
        <p className={`${styles.ad_text} ${styles.ad_text2}`}>JavaScript</p>
        <p className={`${styles.ad_text} ${styles.ad_text3}`}>Design</p>
        <p className={`${styles.ad_text} ${styles.ad_text4}`}>Postgres</p>
      </section>

      <Section className={styles.content_container}>
        <Logo className={styles.logo}/>
        <ul className={styles.list_container}>
          <li><TextLink to='/sobre'>Sobre</TextLink></li>
          <li><TextLink to='/'>Home</TextLink></li>
          <li><TextLink to='/contato'>Contato</TextLink></li>
          <li><TextLink to='/layouts'>Layouts</TextLink></li>
        </ul>
        <p>E-mail:<br/><TextLink a type='strong' to='mailto:tart.a.r.contato@gmail.com'>tart.a.r.contato@gmail.com</TextLink></p>
        <h5>© TART | 2024</h5>
      </Section>
    </footer>
  );
};
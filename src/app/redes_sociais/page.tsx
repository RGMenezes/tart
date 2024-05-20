import styles from './page.module.css';
import Article from '@/components/layouts/Article';
import ButtonLink from '@/components/link/ButtonLink';
import Logo from '@/components/svg/Logo';
import { BsEnvelopeAt, BsInstagram } from 'react-icons/bs';

export default function Sobre(){
  return(
    <main className={styles.main}>
      <Article className={styles.article_container}>
        <h1>Entre em contato</h1>

        <ButtonLink fullWidth a type='gradient' to='mailto:tart.a.r.contato@gmail.com'>
          <BsEnvelopeAt /> Mensagem por E-mail
        </ButtonLink>
        <ButtonLink fullWidth rel='external' lang={undefined} target='_blank' type='gradient' to='https://www.instagram.com/tart_oficial/'>
          <BsInstagram /> Mensagem por Direct
        </ButtonLink>
      </Article>

      <Article className={styles.article_container}>
        <h1>Redes Sociais</h1>

        <ButtonLink fullWidth type='highlight' to='/'>
          <Logo className={styles.logo_icon} /> tartoficial.vercel.app
        </ButtonLink>
        <ButtonLink fullWidth rel='external' lang={undefined} target='_blank' type='highlight' to='https://www.instagram.com/tart_oficial/'>
          <BsInstagram /> @tart_oficial
        </ButtonLink>
      </Article>
    </main>
  );
};
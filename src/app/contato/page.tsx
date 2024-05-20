import imageAd from '@public/assets/tart/contact_page.png';
import styles from './page.module.css';
import AdvertisementContainer from '@/components/containers/AdvertisementContainer';
import adText from '@/texts/adText';
import Section from '@/components/layouts/Section';
import ButtonLink from '@/components/link/ButtonLink';
import { BsEnvelopeAt, BsInstagram } from 'react-icons/bs';

export default function Contato(){
  return(
    <main className={styles.main}>
      <h1>Contato</h1>
      <AdvertisementContainer imageSizeWidth className={styles.ad_container} image={imageAd} alt='Jovem usando um notebook sentado'>
        <h2>{adText.contact.title}</h2>
        <p><strong>{adText.contact.paragraph}</strong></p>
      </AdvertisementContainer>
      <Section>
        <ButtonLink type='highlight' to='/contato'><BsEnvelopeAt /> Mensagem por E-mail</ButtonLink>
        <ButtonLink rel='external' lang={undefined} target='_blank' type='highlight' to='https://www.instagram.com/direct/t/65392689293/'><BsInstagram /> Mensagem por Direct</ButtonLink>
      </Section>
    </main>
  );
};
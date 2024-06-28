import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';
import imageYSCover from '@public/assets/yakuwari_sekai/cover_yakuwari_sekai.png';
import imageGFPortrait from '@public/assets/gestor_financeiro/gestor_financeiro_portrait.png';
import imageGFPortrait1 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait1.png';
import imageGFPortrait2 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait2.png';
import imageGFPortrait3 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait3.png';
import imageGFPortrait4 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait4.png';
import imageGFPortrait5 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait5.png';
import imageGFPortrait6 from '@public/assets/gestor_financeiro/gestor_financeiro_portrait6.png';
import imageGFLandscap from '@public/assets/gestor_financeiro/gestor_financeiro_landscape.png';
import imageGFLandscap1 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap1.png';
import imageGFLandscap2 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap2.png';
import imageGFLandscap3 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap3.png';
import imageGFLandscap4 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap4.png';
import imageGFLandscap5 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap5.png';
import imageGFLandscap6 from '@public/assets/gestor_financeiro/gestor_financeiro_landscap6.png';
import { StaticImageData } from 'next/image';

export interface TypeProject {
  title: string;
  paragraph: string;
  cta: string;
  description: string;
  dev: [string, string][];
  repository?: string;
  site: string;
  imagePortrait: StaticImageData[];
  imageLandescap: StaticImageData[];
  imageCover: StaticImageData;
  imageAlt: string;
}


const gestorFinanceiro: TypeProject = {
  title: 'Gestor Financeiro',
  paragraph: 'O Gestor Financeiro Pessoal é um site intuitivo e responsivo que ajuda você a monitorar, controlar e planejar suas finanças pessoais de maneira eficiente. ',
  cta: 'Gerir finanças +',
  description: `O Gestor Financeiro Pessoal é um site criado para ajudar você a controlar suas finanças de maneira fácil e prática. Com ele, você pode monitorar todos os seus ganhos e gastos, garantindo uma visão clara de sua situação financeira.\n
Este site foi desenvolvido para ser intuitivo e seguro, oferecendo tudo o que você precisa para organizar suas finanças pessoais. Através dele, você pode ver seu saldo, adicionar e categorizar suas transações financeiras, e ajustar suas preferências de acordo com suas necessidades.\n
Para construir este site, foram usadas tecnologias modernas que garantem uma experiência rápida e eficiente. Isso inclui ferramentas que tornam a navegação simples e agradável, tanto no computador quanto no celular.\n
Entre as principais funcionalidades do Gestor Financeiro Pessoal estão: um sistema seguro de login e registro, uma visão geral de todas as suas finanças em um painel fácil de entender, e a possibilidade de adicionar, editar e remover transações de forma rápida e simples. Você também pode ajustar seu perfil e preferências financeiras para personalizar sua experiência no site.\n
Durante o desenvolvimento do Gestor Financeiro Pessoal, enfrentamos alguns desafios, como garantir que o site fosse fácil de usar e ao mesmo tempo seguro. Esses desafios foram superados para proporcionar a você uma ferramenta robusta e confiável para a gestão de suas finanças.\n
O Gestor Financeiro Pessoal é a solução ideal para quem quer ter um controle eficiente de suas finanças. Experimente agora e veja como é fácil manter suas finanças organizadas!
`,
  dev:  [['RGMenezes', 'https://github.com/RGMenezes']],
  repository: 'https://github.com/RGMenezes/gestor_financeiro',
  site: 'https://gestorfinanceirotart.vercel.app/',
  imagePortrait: [imageGFPortrait, imageGFPortrait1, imageGFPortrait2, imageGFPortrait3, imageGFPortrait4, imageGFPortrait5, imageGFPortrait6],
  imageLandescap: [imageGFLandscap, imageGFLandscap1, imageGFLandscap2, imageGFLandscap3, imageGFLandscap4, imageGFLandscap5, imageGFLandscap6],
  imageCover: imageGFPortrait,
  imageAlt: 'Imagem ilustrativa do projeto Gestor Financeiro.'
};


const yakuwariSekai: TypeProject = {
  title: 'Yakuwari Sekai',
  paragraph: 'Yakuwari Sekai é uma plataforma online onde os amantes de RPGs Narrados se encontram para desfrutar de épicas e enigmáticas aventuras.',
  cta: 'Ver mais +',
  description: 'Bem-vindo ao Yakuwari Sekai, o destino definitivo para os apaixonados por RPGs Narrados! Entre em um mundo de aventuras épicas e enigmáticas, onde a imaginação ganha vida e os limites são apenas os da sua própria criatividade.\nEm Yakuwari Sekai, você encontrará uma comunidade vibrante de aventureiros de todas as origens, prontos para se lançarem em jornadas emocionantes e explorar mundos fantásticos juntos. Seja você um mestre habilidoso das narrativas ou um herói em busca de glória, há um lugar para você aqui.\nJunte-se a nós e embarque em jornadas emocionantes, onde cada escolha molda o destino da história. Desafie-se, crie laços de amizade e viva experiências que vão além dos limites da realidade. O mundo está à sua espera em Yakuwari Sekai.',
  dev: [['RGMenezes', 'https://github.com/RGMenezes']],
  repository: undefined,
  site: 'https://yakuwarisekai.vercel.app/',
  imagePortrait: [imageYSPortrait],
  imageLandescap: [imageYSLandscap],
  imageCover: imageYSCover,
  imageAlt: 'Imagem ilustrativa do projeto yakuwari sekai.'
};

export default (() => {
  return {
    yakuwariSekai,
    gestorFinanceiro
  };
})();
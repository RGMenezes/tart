import imageYSPortrait from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_portrait.jpg';
import imageYSLandscap from '@public/assets/yakuwari_sekai/home_yakuwari_sekai_landscap.jpg';
import { StaticImageData } from 'next/image';

export interface TypeProject {
  title: string;
  paragraph: string;
  cta: string;
  description: string;
  dev: [string, string][];
  repository: undefined;
  site: string;
  imagePortrait: StaticImageData[];
  imageLandescap: StaticImageData[];
  imageAlt: string;
}


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
  imageAlt: 'Imagem do projeto yakuwari sekai.'
};

export default (() => {
  return {
    yakuwariSekai
  };
})();
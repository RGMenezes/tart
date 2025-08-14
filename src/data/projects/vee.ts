import imageVEECover from "@public/image/projects/vee/vee_cover.png";
import imageVEEPortrait1 from "@public/image/projects/vee/vee_portrait1.png";
import imageVEEPortrait2 from "@public/image/projects/vee/vee_portrait2.png";
import imageVEEPortrait3 from "@public/image/projects/vee/vee_portrait3.png";
import imageVEEPortrait4 from "@public/image/projects/vee/vee_portrait4.png";
import imageVEELandscap1 from "@public/image/projects/vee/vee_landscap1.png";
import imageVEELandscap2 from "@public/image/projects/vee/vee_landscap2.png";
import imageVEELandscap3 from "@public/image/projects/vee/vee_landscap3.png";

import { rgmenezes } from "../team";
import { Project } from "./Project";

const vee = new Project("VEE", [rgmenezes]);

vee.content = {
    summary: 
    "A VEE é uma plataforma de criação de sites e sistemas que oferece soluções rápidas e profissionais para empreendedores digitais, tornando seu negócio online mais eficiente e acessível.",
  
    cta: 
    "Conhecer a VEE +",
  
    description: 
    `A VEE é um projeto da TART desenvolvido para ajudar empreendedores a terem presença digital de forma rápida e eficiente. Com a VEE, você pode criar sites e sistemas personalizados, garantindo que seu negócio esteja online com qualidade e sem complicações.\n
    A plataforma foi criada para ser intuitiva, responsiva e segura, permitindo que você gerencie seus projetos digitais com facilidade, tanto em computadores quanto em dispositivos móveis.\n
    Entre as principais funcionalidades da VEE estão: templates prontos e personalizáveis, sistemas sob medida de acordo com a necessidade do cliente, integração com ferramentas digitais e um painel de controle simples para gerenciar seu site ou sistema.\n
    Durante o desenvolvimento da VEE, enfrentamos desafios como unir rapidez, design moderno e funcionalidade robusta. Todos foram superados para oferecer uma solução confiável e prática para empreendedores.\n
    A VEE é ideal para quem deseja lançar seu negócio online de maneira profissional e ágil. Experimente a VEE e transforme suas ideias em sites e sistemas de qualidade com facilidade!`
};

vee.images = {
    portrait: [imageVEEPortrait1, imageVEEPortrait1, imageVEEPortrait2, imageVEEPortrait3, imageVEEPortrait4],
    landscape: [imageVEELandscap1, imageVEELandscap1, imageVEELandscap2, imageVEELandscap3],
    cover: imageVEECover,
    alt: "Imagem ilustrativa do projeto VEE"
};

vee.urls = {
    site: "https://veetart.vercel.app/"
};

export default vee;
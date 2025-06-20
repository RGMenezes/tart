import { Project } from "./Project";
import imageGFPortrait from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait.png";
import imageGFPortrait1 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait1.png";
import imageGFPortrait2 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait2.png";
import imageGFPortrait3 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait3.png";
import imageGFPortrait4 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait4.png";
import imageGFPortrait5 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait5.png";
import imageGFPortrait6 from "@public/image/projects/gestor_financeiro/gestor_financeiro_portrait6.png";
import imageGFLandscap from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscape.png";
import imageGFLandscap1 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap1.png";
import imageGFLandscap2 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap2.png";
import imageGFLandscap3 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap3.png";
import imageGFLandscap4 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap4.png";
import imageGFLandscap5 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap5.png";
import imageGFLandscap6 from "@public/image/projects/gestor_financeiro/gestor_financeiro_landscap6.png";

const gestorFinenceiro = new Project("Gestor Financeiro", [["RGMenezes", "https://github.com/RGMenezes"]]);

gestorFinenceiro.content = {
    summary: 
    "O Gestor Financeiro Pessoal é um site intuitivo e responsivo que ajuda você a monitorar, controlar e planejar suas finanças pessoais de maneira eficiente. "
    ,
    cta: 
    "Gerir finanças +"
    ,
    description: 
    `O Gestor Financeiro Pessoal é um site criado para ajudar você a controlar suas finanças de maneira fácil e prática. Com ele, você pode monitorar todos os seus ganhos e gastos, garantindo uma visão clara de sua situação financeira.\n
    Este site foi desenvolvido para ser intuitivo e seguro, oferecendo tudo o que você precisa para organizar suas finanças pessoais. Através dele, você pode ver seu saldo, adicionar e categorizar suas transações financeiras, e ajustar suas preferências de acordo com suas necessidades.\n
    Para construir este site, foram usadas tecnologias modernas que garantem uma experiência rápida e eficiente. Isso inclui ferramentas que tornam a navegação simples e agradável, tanto no computador quanto no celular.\n
    Entre as principais funcionalidades do Gestor Financeiro Pessoal estão: um sistema seguro de login e registro, uma visão geral de todas as suas finanças em um painel fácil de entender, e a possibilidade de adicionar, editar e remover transações de forma rápida e simples. Você também pode ajustar seu perfil e preferências financeiras para personalizar sua experiência no site.\n
    Durante o desenvolvimento do Gestor Financeiro Pessoal, enfrentamos alguns desafios, como garantir que o site fosse fácil de usar e ao mesmo tempo seguro. Esses desafios foram superados para proporcionar a você uma ferramenta robusta e confiável para a gestão de suas finanças.\n
    O Gestor Financeiro Pessoal é a solução ideal para quem quer ter um controle eficiente de suas finanças. Experimente agora e veja como é fácil manter suas finanças organizadas!`
};


gestorFinenceiro.images = {
    portrait: [imageGFPortrait, imageGFPortrait1, imageGFPortrait2, imageGFPortrait3, imageGFPortrait4, imageGFPortrait5, imageGFPortrait6],
    landscape: [imageGFLandscap, imageGFLandscap1, imageGFLandscap2, imageGFLandscap3, imageGFLandscap4, imageGFLandscap5, imageGFLandscap6],
    cover: imageGFPortrait,
    alt: "Imagem ilustrativa do projeto Gestor Financeiro."
};

gestorFinenceiro.urls = {
    repository: "https://github.com/RGMenezes/gestor_financeiro",
    site: "https://gestorfinanceirotart.vercel.app/",
};

export default gestorFinenceiro;
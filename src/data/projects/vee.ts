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
    "A VEE é um espaço de estudo, reflexão e crescimento espiritual, oferecendo conteúdos que fortalecem a fé e incentivam aprendizado contínuo da Palavra.",

    cta: 
    "Explorar a VEE +",

    description: 
    `A VEE é um projeto que nasceu para ajudar pessoas a aprofundarem sua fé e fortalecerem sua conexão com Deus. Com a VEE, você encontra estudos, reflexões e recursos que facilitam o aprendizado da Palavra e promovem crescimento pessoal e espiritual.\n
    O projeto foi desenvolvido para ser acessível, intuitivo e inspirador, permitindo que cada usuário explore conteúdos no seu próprio ritmo, tanto individualmente quanto em grupo.\n
    Entre os principais recursos da VEE estão: trilhas de estudos guiadas, biblioteca de materiais devocionais, múltiplas versões da Bíblia, versículos do dia e espaços de reflexão e comunidade.\n
    Durante o desenvolvimento, buscamos criar uma experiência que una profundidade, clareza e facilidade de uso, garantindo que cada visitante possa crescer na fé de forma significativa.\n
    A VEE é ideal para quem deseja estudar a Palavra de maneira prática, reflexiva e engajadora. Descubra a VEE e transforme seu aprendizado espiritual em uma experiência concreta e pessoal!`
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
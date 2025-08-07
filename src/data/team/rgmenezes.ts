import imageProfile from "@public/image/team/rgmenezes/image_profile.jpeg";
import { Author } from "./Author";

const rgmenezes = new Author(
    "Rafael Menezes",
    imageProfile,
    "Desenvolvedor full stack e estudante de Sistemas de Informação no Instituto Federal Fluminense (IFF). Trabalho com tecnologias como Next.js, TypeScript, Java, PostgreSQL e MongoDB, criando sistemas web acessíveis, organizados e funcionais. Me destaco pela clareza na comunicação com o cliente, responsabilidade com prazos e foco em soluções reais.",
    "faelgmp@gmail.com",
    "Desenvolvedor full-stack",
    ["TypeScript", "Java", "Next.js", "PostgreSQL", "MongoDB"]
);

rgmenezes.addSocialMedia({
    media: "GitHub",
    profile: "RGMenezes",
    url: "https://github.com/RGMenezes"
});
rgmenezes.addSocialMedia({
    media: "LinkedIn",
    profile: "rafaelgmenezes",
    url: "https://linkedin.com/in/rafaelgmenezes"
});
rgmenezes.addSocialMedia({
    media: "99Freelas",
    profile: "RGMenezes",
    url: "https://www.99freelas.com.br/user/RGMenezes"
});

rgmenezes.addReview({
    projectName: "Sistema de Comissões",
    clientName: "Cliente 99Freelas",
    star: 5.0,
    comment: "Fez o trabalho rápido e de forma profissional"
});
  

rgmenezes.addProject({
    projectName: "Gestor Financeiro",
    summary: "Sistema web para controle financeiro com receitas, despesas e organização mensal. Desenvolvido com Next.js, TypeScript e MongoDB.",
    link: "https://gestorfinanceirotart.vercel.app"
});
rgmenezes.addProject({
    projectName: "TART (Portfólio Profissional)",
    summary: "Site institucional voltado à apresentação clara e objetiva de serviços e projetos, com linguagem acessível e design limpo.",
    link: "https://tartoficial.vercel.app"
});

export default rgmenezes;
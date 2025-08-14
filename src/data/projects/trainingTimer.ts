import { rgmenezes } from "../team";
import { Project } from "./Project";

import imageTTCover from "@public/image/projects/traning_timer/training_timer_cover.png";
import imageTT1 from "@public/image/projects/traning_timer/training_timer1.jpg";
import imageTT2 from "@public/image/projects/traning_timer/training_timer2.jpg";
import imageTT3 from "@public/image/projects/traning_timer/training_timer3.jpg";

const trainingTimer = new Project("Training Timer", [rgmenezes]);

trainingTimer.content = {
    summary: 
    "O Training Timer é um aplicativo intuitivo que ajuda você a gerenciar seus treinos, controlando exercícios, sets, pausas e rodadas de forma prática e eficiente.",
  
    cta: 
    "Começar treino +",
  
    description: 
    `O Training Timer é um aplicativo criado para tornar seus treinos mais organizados e produtivos. Com ele, você consegue controlar cada exercício, número de sets, rodadas e tempos de pausa, tudo de forma visual e clara.\n
    O app foi desenvolvido para ser intuitivo e responsivo, garantindo que você acompanhe seu treino tanto no celular quanto em tablets, com cores e mensagens que indicam o estado atual do treino.\n
    Entre as principais funcionalidades do Training Timer estão: cronômetro para cada exercício e pausa, mensagens personalizadas por set, controle de rodadas, e cores de fundo que ajudam a diferenciar os momentos de exercício e descanso.\n
    Durante o desenvolvimento do Training Timer, nos concentramos em oferecer uma experiência prática e motivadora, garantindo que o usuário possa focar no treino sem se perder no tempo ou na sequência de exercícios.\n
    O Training Timer é a solução ideal para quem quer ter controle total do treino, aumentar a produtividade e tornar cada sessão mais eficiente. Experimente agora e treine de forma organizada e motivadora!`
};

trainingTimer.images = {
    portrait: [imageTT1, imageTT1, imageTT2, imageTT3],
    landscape: [],
    cover: imageTTCover,
    alt: "Imagem ilustrativa do app Training Timer"
};

trainingTimer.urls = {
    site: "/apk/trainingTimerTART.apk"
};

export default trainingTimer;
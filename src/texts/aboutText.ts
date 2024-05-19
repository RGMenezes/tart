interface About {
  title: string;
  paragraph: string;
}

const about: About[] = [
  {
    title: 'Visão',
    paragraph: 'Na TART, nossa missão é revolucionar a maneira como os empreendedores adquirem sites, unindo facilidade com individualidade. Acreditamos que cada negócio tem sua própria história a contar e merece uma presença online distintiva que reflita sua identidade única.'
  },
  {
    title: 'Missão',
    paragraph: 'Buscamos não apenas ampliar a marca digitalmente para nossos clientes, mas também proporcionar praticidade e otimização de projetos, através de funcionalidades exclusivas. Nosso objetivo é tornar o processo de desenvolvimento web acessível, eficiente e adaptado às necessidades específicas de cada cliente.'
  },
  {
    title: 'Valores',
    paragraph: 'Respeito, coletividade, empatia e confiança são os valores fundamentais que orientam nosso trabalho na TART. Valorizamos o relacionamento com nossos clientes e colaboradores, buscando sempre construir parcerias sólidas e duradouras.'
  },
  {
    title: 'Nossa História',
    paragraph: 'A TART foi fundada este ano com a visão de transformar a indústria de desenvolvimento web, simplificando o processo de criação de sites e proporcionando resultados excepcionais para nossos clientes.'
  },
  {
    title: 'Equipe',
    paragraph: 'Nossa equipe é liderada por Rafael Menezes, fundador e CEO da TART, e Alan Codeço, co-fundador e CEO. Ambos são desenvolvedores experientes e apaixonados por criar soluções inovadoras para nossos clientes.'
  },
  {
    title: 'Por que Escolher a TART',
    paragraph: 'A simplicidade é o nosso diferencial. Na TART, priorizamos a comunicação transparente e eficiente, transformando projetos e sonhos em realidade com segurança. Nosso compromisso é com a excelência em cada etapa do processo, garantindo que nossos clientes tenham uma experiência excepcional desde o início até a entrega final do projeto.'
  }
];


export default (() => {
  return {
    about
  };
})();
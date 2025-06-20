interface IShowcase {
  title: string;
  paragraph: string;
  cta?: string;
}

export default class Showcase implements IShowcase{
    title: string;
    paragraph: string;
    cta?: string;

    constructor(title: string, paragraph: string, cta?: string){
        this.title = title;
        this.paragraph = paragraph;
        this.cta = cta;
    }
}
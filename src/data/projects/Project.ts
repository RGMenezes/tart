import { StaticImageData } from "next/image";

type TAuthor = [string, string][];

interface IImages {
    portrait: StaticImageData[];
    landscape: StaticImageData[];
    cover: StaticImageData;
    alt: string;
}
interface Iurls{
    repository?: string;
    site?: string;
}
interface IContent{
    summary: string;
    description: string;
    cta: string;
}

interface IProject {
    title: string;
    content?: IContent;
    images?: IImages;
    urls?: Iurls;
    author: TAuthor;
}

export class Project implements IProject {
    title: string;
    private _content?: IContent;
    private _images?: IImages;
    private _urls?: Iurls;
    author: TAuthor;

    constructor(title: string, author: TAuthor){
        this.title = title;
        this.author = author;
    }

    get content(){
        if(!this._content) throw new Error("Content was not defined!");
        return this._content;
    }
    set content({summary, description, cta}: IContent){
        this._content = {summary, description, cta};
    }

    get images(){
        if(!this._images) throw new Error("Images was not defined!");
        return this._images;
    }
    set images({portrait, landscape, cover, alt}: IImages){
        this._images = {portrait, landscape, cover, alt};
    }

    get urls(){
        if(!this._urls) throw new Error("Urls was not defined!");
        return this._urls;
    }
    set urls({site, repository}: Iurls){
        this._urls = {site, repository};
    }
}
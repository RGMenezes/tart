import { StaticImageData } from "next/image";

interface ISocial{
    media: string;
    profile: string;
    url: string;
}

interface IReviews{
    projectName: string;
    clientName?: string;
    star?: number;
    comment: string;
}

interface IProject{
    projectName: string;
    summary?: string;
    link?: string;
}

interface IAuthor {
    name: string;
    image: StaticImageData;
    bio: string;
    email: string;
    jobPosition: string;
    technology: string[];
    websiteUrl?: string;
    socialMedia: ISocial[];
    reviews: IReviews[];
    projects: IProject[];
}

export class Author implements IAuthor{ 
    name: string;
    image: StaticImageData;
    bio: string;
    email: string;
    jobPosition: string;
    technology: string[];
    websiteUrl?: string;
    private _socialMedia: ISocial[];
    private _reviews: IReviews[];
    private _projects: IProject[];

    constructor(name: string, image: StaticImageData, bio: string, email: string, jobPosition: string, technology: string[], websiteUrl?: string){
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.email = email;
        this.jobPosition = jobPosition;
        this.technology = technology;
        this.websiteUrl = websiteUrl;
        this._socialMedia = [];
        this._reviews = [];
        this._projects = [];
    }

    addSocialMedia(media: ISocial) {
        this._socialMedia.push(media);
    }
    set socialMedia(socialMedia: ISocial[]){
        this._socialMedia = socialMedia;
    }
    get socialMedia(){
        return this._socialMedia;
    }

    addReview(review: IReviews) {
        this._reviews.push(review);
    }
    set reviews(reviews: IReviews[]){
        this._reviews = reviews;
    }
    get reviews(){
        return this._reviews;
    }
    
    addProject(project: IProject) {
        this._projects.push(project);
    }
    set projects(projects: IProject[]){
        this._projects = projects;
    }
    get projects(){
        return this._projects;
    }
}
"use client";

import styles from "./page.module.css";
import { BsArrowRight, BsFolderSymlink, BsLaptop, BsLink45Deg } from "react-icons/bs";
import Image from "next/image";
import { Article, Section } from "@/shared/layout";
import { WrapperScrollX } from "@/shared/wrapper";
import Project, { gestorFinenceiro } from "@/data/projects";
import { LinkExternal, LinkInternal, LinkInternalButton } from "@/shared/link";
import { project as projectAdd } from "@data/showcase";


export default function Projetos({params}: {params: {projectNameURI: string}}){
    const projectName = decodeURIComponent(params.projectNameURI);
    let project: Project | undefined;

    if(projectName === "gestorFinanceiro"){
        project = gestorFinenceiro;
    }
  
    return(
        <main className={styles.main}>
            <h1>{project?.title}</h1>
      
            <Section className={styles.content_section}>
                <WrapperScrollX>
                    {project?.images.portrait.map((item, index) => index !== 0 && 
                        <Image className={styles.image} key={`portrait_${index}`} src={item} alt={project.images.alt}/>
                    )}
                    {project?.images.landscape.map((item, index) => index !== 0 &&
                        <Image className={styles.image} key={`landscap_${index}`} src={item} alt={project.images.alt}/>
                    )}
                </WrapperScrollX>

                <Article>
                    {project?.content.description.split("\n").map((item, index) => <p key={`description_${index}`}>{item}</p>)}
                </Article>

                <div className={styles.flow_x_around_container}>
                    {project?.urls.repository && <LinkExternal  target='_blank' type='highlight' href={project.urls.repository}>
            Código fonte <BsFolderSymlink />
                    </LinkExternal>}

                    {project?.urls.site && <LinkExternal  target='_blank' type='highlight' href={project.urls.site}>
            Acessar <BsLink45Deg />
                    </LinkExternal>}
                </div>

                <div className={styles.flow_x_center_container}>
                    {project?.author.map( (author, index) =>  <LinkInternal key={`author_${index}`} href={`/time/${author.name}`}>
                        <BsLaptop /> {author.name}
                    </LinkInternal>)}
                </div>
            </Section>

            <Section className={styles.assessment_section}>
                <Article className={styles.assessment_article}>
                    <h2>{projectAdd.title}</h2>
                    <p>{projectAdd.paragraph}</p>
                    <LinkInternalButton type='highlight' href='/contato'>{projectAdd.cta} <BsArrowRight /></LinkInternalButton>
                </Article>
            </Section>
        </main>
    );
}
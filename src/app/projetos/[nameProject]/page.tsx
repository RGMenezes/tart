import Section from '@/components/layouts/Section';
import styles from './page.module.css';
import adText from '@/texts/adText';
import Article from '@/components/layouts/Article';
import ButtonLink from '@/components/link/ButtonLink';
import { BsArrowRight, BsFolderSymlink, BsLaptop, BsLink45Deg } from 'react-icons/bs';
import ScrollXContainer from '@/components/containers/ScrollXContianer';
import projectText, { TypeProject } from '@/texts/projectText';
import Image from 'next/image';
import TextLink from '@/components/link/TextLink';

export default function Projetos({params: {nameProject}}: {params: {nameProject: string}}){
  const projectName = decodeURIComponent(nameProject);
  let project: TypeProject | undefined;

  if(projectName === 'yakuwariSekai'){
    project = projectText.yakuwariSekai;
  }
  
  return(
    <main className={styles.main}>
      <h1>{project?.title}</h1>
      
      <Section className={styles.content_section}>
        <ScrollXContainer>
          {project?.imagePortrait.map((item, index) => <Image className={styles.image} key={`portrait_${index}`} src={item} alt={project.imageAlt}/>)}
          {project?.imageLandescap.map((item, index) => <Image className={styles.image} key={`landscap_${index}`} src={item} alt={project.imageAlt}/>)}
        </ScrollXContainer>

        <Article>
          {project?.description.split('\n').map((item, index) => <p key={`description_${index}`}>{item}</p>)}
        </Article>

        <div className={styles.flow_x_around_container}>
          {project?.repository && <TextLink rel='external' lang={undefined} target='_blank' type='highlight' to={project.repository}>
            Código fonte <BsFolderSymlink />
          </TextLink>}

          {project?.site && <TextLink rel='external' lang={undefined} target='_blank' type='highlight' to={project.site}>
            Acessar <BsLink45Deg />
          </TextLink>}
        </div>

        <div className={styles.flow_x_center_container}>
          {project?.dev.map( (item, index) =>  <TextLink key={`dev_${index}`} rel='external' lang={undefined} target='_blank' to={item[1]}>
            <BsLaptop /> {item[0]}
          </TextLink>)}
        </div>
      </Section>

      <Section className={styles.assessment_section}>
        <Article className={styles.assessment_article}>
          <h2>{adText.project.title}</h2>
          <p>{adText.project.paragraph}</p>
          <ButtonLink type='highlight' to='/contato'>{adText.project.cta} <BsArrowRight /></ButtonLink>
        </Article>
      </Section>
    </main>
  );
};
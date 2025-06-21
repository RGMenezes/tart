import { Card } from "@/shared/card";
import styles from "../styles/TeamSummary.module.css";
import { Section } from "@/shared/layout";
import { rgmenezes } from "@/data/team";
import ImageFrame from "./ImageFrame";
import CardReview from "./CardReview";

export default function TeamSummary(){
    return(
        <Section className={styles.container}>
            <Card className={styles.teamCard} defaultStyle>
                <div className={styles.wrapperProfile}>
                    <ImageFrame src={rgmenezes.image} alt={`Imagem_de_perfil_do_autor_${rgmenezes.name}`} />
                    <div className={styles.summary}>
                        <h5>{rgmenezes.name}</h5>
                        <p>{rgmenezes.email}</p>
                    </div>
                </div>
                <CardReview author={rgmenezes}/>
            </Card>
        </Section>
    );
}
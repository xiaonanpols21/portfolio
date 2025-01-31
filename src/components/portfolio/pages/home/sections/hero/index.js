import Switch from "@/components/portfolio/pages/home/sections/hero/switch";
import LinkPrimaire from "@/components/portfolio/links/primaire";
import Projects from "@/components/portfolio/pages/home/sections/hero/projects";
import Tags from "@/components/portfolio/tags/skills";
import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h4 className="visually-hidden">Hero</h4>
            {/* <Switch/> */}

            <section className={styles.content}>
                <h4 className="visually-hidden">Header content</h4>
                <div>
                    <h1>Xiao NaN</h1>
                    <p>Front-end developer</p>
                    <Tags/>
                    <p>Een creatieve front-end develop met oog voor design waarbij toegankelijkheid belangrijk is voor iedereen!</p>
                    <LinkPrimaire
                        link={"/portfolio/over-mij"}
                        aria="Over mij knop"
                        text={"Meer over mij"}
                    />
                </div>
            </section>

            <Projects/>
            
        </section>
    )
}
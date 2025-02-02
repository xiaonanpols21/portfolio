
import Header from "@/components/header";
import Slider from "@/components/gallery/slider";
import HeroImg from "@/components/pages/projects/project/heroImg";
import LinkPrimaireTarget from "@/components/links/primaireTarget";
import Radio from "@/components/gallery/radio";
import BtnPrimaireShadow from "@/components/buttons/primaireShadow";
import NextProject from "@/components/pages/projects/project/sections/nextProject";
import styles from "./project.module.scss";

export default async function Project({params}) {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects?acf_format=standard')
    const data = await fetchData.json();

    const { slug } = await params;
    const singleData = data.find((item) => item.slug === slug);

    // Chat GPT
    const currentIndex = data.findIndex((item) => item.slug === slug);

    const nextProject = currentIndex !== -1
    ? data[(currentIndex + 1) % data.length] 
    : null;
    

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div>
                    {singleData.acf.images.length > 1 ? (
                        <>
                            <Slider
                                classes={styles.slider}
                                data={singleData}
                            />
                            
                            <Radio
                                classes={styles.radio}
                                data={singleData}
                            />
                        </>
                   
                    ) : (
                        <HeroImg data={singleData}/>
                    ) }
               
                    <div>
                        <h1>{singleData.title.rendered}</h1>
                        <ul>
                            {singleData.acf.tags.map((item, key) => (
                                <li key={key}>{item.tag}</li>
                            ))}
                        </ul>

                        {singleData.acf.live_slow_loading === true && (
                            <p>* Laden duurt lang</p>
                        )} 
           
                        <LinkPrimaireTarget
                            link={singleData.acf.live_demo_link}
                            aria="Live dmeo knop"
                            text={"Zie live demo"}
                            classes={styles.btn}
                        />
                        <section className={styles.content}>
                            <h2>Doel</h2>
                            <p>{singleData.acf.goal}</p>
                            <h2>Wat heb ik gedaan?</h2>

                            {/* Bron: https://blog.logrocket.com/using-dangerouslysetinnerhtml-react-application/ */}
                            <div dangerouslySetInnerHTML={{__html: singleData.acf.progress}}/>
                        </section>
                    </div>
                </div>
            </main> 

            <NextProject data={nextProject}/>
       
            {/* Fixed content */}
            {/* <BtnPrimaireShadow
                aria="Check knop"
                img={"../../img/portfolio/icons/bookmark-fill.svg"}
                alt={"Check icoon"}
                classes={styles.bookmark}
            /> */}
        </>

    )
}

// Bron: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export async function generateStaticParams() {
    const data = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects?acf_format=standard').then((res) => res.json())
   
    return data.map((item) => ({
        slug: item.slug,
    }))
  }
import Link from "next/link";
import Header from "@/components/header";
import SliderVerify from "@/components/gallery/sliderVerify";
import Tags from "@/components/tags/me";
import SocialMedia from "@/components/links/socialMedia";
import Footer from "@/components/footer";
import RadioVerify from "@/components/gallery/radioVerify";
import styles from "./over.module.scss";

export default async function OverMij() {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/galleries?acf_format=standard')
    const data = await fetchData.json();

    const galleryData = data[0].acf.galleries.map((item) => {
        return item;
    })

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div>
        
                    <SliderVerify 
                        data={galleryData}
                        classes={styles.slider}
                    />

                    <RadioVerify
                        classes={styles.radio}
                        data={galleryData}
                    />

                    <div>
                        <h1>Xiao Nan Pols</h1>
                        <Tags classes={styles.tags}/>
                        <p>Mijn naam is Xiao Nan Pols. Onlangs ben ik afgestudeerd van de opleiding CMD <strong>(Communication Multimedia Design)</strong> in Amsterdam. Tijdens deze studie heb ik geleerd hoe je zowel websites kunt ontwerpen als programmeren. Ik ben vastbesloten om mezelf verder uit te dagen als <strong>front-end developer</strong> en te ontdekken wat er allemaal mogelijk is op het web.</p>
                        <p>Daarnaast zie ik dat <strong>toegankelijkheid</strong> online vaak over het hoofd wordt gezien, en ik wil hier graag mijn steentje aan bijdragen.</p>
                        <p>Ik ben flexibel, <strong>gedisciplineerd</strong> en werk doelgericht. Daarbij ga ik gedetailleerd te werk om mijn doelen te behalen.</p>
                        <p>Naast mijn passie voor webontwikkeling ben ik ook <strong>creatief</strong> bezig: ik heb een <Link href="https://www.tiktok.com/@xiaodesign?_t=ZN-8tPtnjqt4Da&_r=1">stickerbusiness</Link> opgezet en twee boeken uitgebracht via <Link href="https://www.boekscout.nl/shop2/zoeken?term=xiao+nan+pols">boekscout.nl/yo.</Link> In mijn vrije tijd ga ik graag naar de sportschool en geniet ik van lekker aziatisch eten!</p>
                        
                        <section className={styles.socialMedia}>
                            <h3 className="visually-hidden">Social media</h3>
                            <ul>
                                <li>
                                    <SocialMedia
                                        link={"https://github.com/xiaonanpols21"}
                                        aria="Github knop"
                                        img={"../../img/icons/github.svg"}
                                        alt={"Github icoon"}
                                    />
                                </li>
                                <li>
                                    <SocialMedia
                                        link={"https://www.linkedin.com/in/xiao-nan-pols-b839951b5/"}
                                        aria="Linkedin knop"
                                        img={"../../img/icons/linkedin.svg"}
                                        alt={"Linkedin icoon"}
                                    />
                                </li>
                                <li>
                                    <SocialMedia
                                        link={"https://www.instagram.com/xiaonanpols21/"}
                                        aria="Instagram knop"
                                        img={"../../img/icons/instagram.svg"}
                                        alt={"Instagram icoon"}
                                    />
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
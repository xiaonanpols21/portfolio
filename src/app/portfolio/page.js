import Link from "next/link";
import Header from "@/components/portfolio/header";
import Hero from "@/components/portfolio/pages/home/sections/hero";
import Experiences from "@/components/portfolio/pages/home/sections/experiences";
import Contact from "@/components/portfolio/pages/home/sections/contact";
import Footer from "@/components/portfolio/footer";
import BtnPrimaireShadow from "@/components/portfolio/buttons/primaireShadow";
import Bookmarked from "@/components/portfolio/bookmarked";
import styles from "./portfolio.module.scss";

// TODO: Add localstorage save fave projects
// TODO: Add darkmode
// TODO: Add scroll effects experience
// TODO: Skills bar toevoegen
// FIXME: Dynamic year in footer
// TODO: Add Procreate animations
// TODO: Add navigation buttons experiences desktop
// TODO: Add animations to the text h1
// TODO: Add scroll driven naimation
// TODO: Wat als de user geen animatie wilt
// TODO: Uitklap hover social media icons desktop

export default function Portfolio() {
    return (
        <>
            {/* Fixed content */}
            <Link className={styles.skipBtn} href="#projecten">Ga naar projecten</Link>
            <Header/>
            
            <Hero/>
            <Experiences/>
            <Contact/>
            <Footer/>
            
            {/* Fixed content */}
            {/* <BtnPrimaireShadow
                aria="Mijn favorieten knop"
                img={"../../img/portfolio/icons/bookmark-fill.svg"}
                alt={"Check icoon"}
                classes={styles.bookmark}
            /> */}
            {/* <Bookmarked/> */}
        </>
    )
}
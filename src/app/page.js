import Link from "next/link";
import Header from "@/components/header";
import Hero from "@/components/pages/home/sections/hero";
import Experiences from "@/components/pages/home/sections/experiences";
import Contact from "@/components/pages/home/sections/contact";
import Footer from "@/components/footer";
import styles from "./portfolio.module.scss";

export default function Home() {
  return (
    <>
        {/* Fixed content */}
        <Link className={styles.skipBtn} href="#projecten">Ga naar projecten</Link>
        <Header/>
        
        <Hero/>
        <Experiences/>
        <Contact/>
        <Footer/>

        <div className={styles.arrowDown}></div>
        
        {/* Fixed content */}
        {/* <BtnPrimaireShadow
            aria="Mijn favorieten knop"
            img={"../../img/portfolio/icons/bookmark-fill.svg"}
            alt={"Check icoon"}
            classes={styles.bookmark}
        /> */}
        {/* <Bookmarked/> */}
    </>
  );
}

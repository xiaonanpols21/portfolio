import BtnPrimaireShadow from "@/components/portfolio/buttons/primaireShadow";
import ImgSimple from "@/components/portfolio/buttons/imgSimple";
import Thumbnail from "@/components/portfolio/cards/thumbnail";
import BtnPrimaire from "@/components/portfolio/buttons/primaire";

import styles from "./components.module.scss";

export default function Components() {
    return (
        <main className={styles.main}>
            <h1>Components</h1>

            <BtnPrimaireShadow
                aria="Check knop"
                img={"../../img/portfolio/icons/check.svg"}
                alt={"Check icoon"}
            />

            <ImgSimple
                img={"/img/portfolio/gallery/g-1.jpg"}
                alt={"Profiel foto"}
            />

            {/* <Thumbnail
                title={"TMDB Dating App"}
                img={"/img/portfolio/gallery/g-1.jpg"}
                alt={"Profiel foto"}
            /> */}

            <BtnPrimaire
                aria="Primaire knop"
                text={"Mijn projecten"}
            />
        </main>
    )
}
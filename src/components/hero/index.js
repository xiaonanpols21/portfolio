import ScrollGallery from "../global/scollGallery";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.section}>
            <label>
                <input type="checkbox"/>
                <span></span>
            </label>

            <ScrollGallery/>
        </section>
    )
}
import Image from "next/image";
import styles from "./img.module.scss";

export default function ImgSimple({img, alt, classes}) {
    return (
        <>
            <section className={`${styles.div} ${classes}`}>
                <h3 className="visually-hidden">Foto</h3>
                <div className={styles.overlay}>
                    <Image
                        src={img}
                        width={300}
                        height={360}
                        alt={alt}
                    />
                </div>
            </section>
        </>

    )
}
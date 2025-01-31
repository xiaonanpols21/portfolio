import Image from "next/image";
import styles from "./img.module.scss";

export default function ImgSimple({img, alt, classes, onClick}) {
    return (
        <>
            <button className={`${styles.div} ${classes}`} onClick={onClick}>
                <div className={styles.overlay}>
                    <Image
                        src={img}
                        width={300}
                        height={360}
                        alt={alt}
                    />
                </div>
            </button>
        </>

    )
}
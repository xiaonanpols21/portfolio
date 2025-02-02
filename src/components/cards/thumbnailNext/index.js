import Image from "next/image";
import Link from "next/link";
import SaveBtn from "../../buttons/saveBtn";
import styles from "./thumbnail.module.scss";

export default function ThumbnailNect({title, img, alt, goal, data, classes, tabIndex, slug}) {
    return (
        <article className={`${styles.article} ${classes}`} tabIndex={tabIndex}>
                <h3>{title}</h3>
                <p>{goal}</p>
                <ul>
                    {data.acf.tags.map((item, key) => (
                        <li key={key}>{item.tag}</li>
                    ))}
                </ul>
                <div className={styles.overlay}>
                    <Image
                        src={img}
                        width={480}
                        height={152}
                        alt={alt}
                    />
                </div>

            {/* <SaveBtn
                title={title}
                img={img}

                classes={styles.saveBtn}
            /> */}
        </article>
    )
}
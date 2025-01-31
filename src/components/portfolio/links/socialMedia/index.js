import Link from "next/link";
import Image from "next/image";
import styles from "./btn.module.scss";

export default function SocialMedia({aria, img, alt, classes, link}) {
    return (
        <Link href={link} className={`${styles.btn} ${classes}`} aria-label={aria} target="_blank">
            <Image
                src={img}
                width={28}
                height={28}
                alt={alt}
            />
        </Link>
    )
}
import Link from "next/link";
import styles from "./primaire.module.scss";

export default function Primaire({aria, text, link, classes}) {
    return (
        <Link href={link} className={`${styles.btn} ${classes}`} aria-label={aria}>
            {text}
        </Link>
    )
}
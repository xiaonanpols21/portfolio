import styles from "./tags.module.scss";

export default function Tags({classes}) {
    return (
        <ul className={`${styles.ul} ${classes}`}>
            <li>React / Next.js</li>
            <li>Figma</li>
            <li>Toegankelijkheid</li>
        </ul>
    )
}
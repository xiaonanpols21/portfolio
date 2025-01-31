import styles from "./tags.module.scss";

export default function Tags({classes}) {
    return (
        <ul className={`${styles.ul} ${classes}`}>
            <li>Art</li>
            <li>Gym</li>
            <li>Food</li>
        </ul>
    )
}
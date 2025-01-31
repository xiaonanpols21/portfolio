import styles from "./primaire.module.scss";

export default function Primaire({aria, text}) {
    return (
        <button className={styles.btn} aria-label={aria}>
            {text}
        </button>
    )
}
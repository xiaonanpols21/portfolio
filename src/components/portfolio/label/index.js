import styles from "./label.module.scss";

export default function Label({name, input, placeholder, classes}) {
    return (
        <label className={`${styles.label}`}>
            {name}
            <input className={`${classes}`} type={input} placeholder={placeholder}></input>
        </label>
    )
}
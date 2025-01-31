import styles from "./experience.module.scss";

export default function Experience({item}) {
    return (
        <section className={styles.section} tabIndex={0}>
            <h4>{item.title.rendered}</h4>

            {/* Bron: https://www.w3schools.com/react/react_es6_ternary.asp */}
            {item.acf.years.year_start === item.acf.years.year_end ? (
                <p className={
                    item.acf.years.year_end === "Heden" 
                    ? styles.heden 
                    : item.acf.education === true 
                    ? styles.education 
                    : ''
                }>
                    {item.acf.years.year_start}
                </p>
            ) : (
                <p className={
                    item.acf.years.year_end === "Heden" 
                    ? styles.heden 
                    : item.acf.education === true 
                    ? styles.education 
                    : ''
                }>
                    {item.acf.years.year_start} - {item.acf.years.year_end}
                </p>
            )}
            
            <p>{item.acf.description}</p>
        </section>
    )
}
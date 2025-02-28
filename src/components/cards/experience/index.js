import styles from "./experience.module.scss";

export default function Experience({item}) {
    console.log(item.acf.tags)

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
                    {item.acf.years.year_start} {item.acf.months.maand_start} -  {item.acf.months.maand_end}
                </p>
            ) : (
                <p className={
                    item.acf.years.year_end === "Heden" 
                    ? styles.heden 
                    : item.acf.education === true 
                    ? styles.education 
                    : ''
                }>
                    {item.acf.years.year_start} {item.acf.months.maand_start} - {item.acf.years.year_end} {item.acf.months.maand_end}
                </p>
            )}
            
            <p>{item.acf.description}</p>
            <div dangerouslySetInnerHTML={{__html: item.acf.doing_there}}/>
            {Array.isArray(item.acf.tags) && item.acf.tags.length > 0 && (
                <ul>
                    {item.acf.tags.map((tagItem, key) => (
                    <li key={key}>{tagItem.tag}</li>
                    ))}
                </ul>
            )}

        </section>
    )
}
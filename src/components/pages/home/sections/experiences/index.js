import ExperienceCard from "@/components/cards/experience";
import styles from "./experiences.module.scss";

export default async function Experiences() {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/experiences?acf_format=standard')
    const data = await fetchData.json();

    // Get the years out of the data
    const extractYear = (dateString) => {
        const [day, month, year] = dateString.split('/');
        return new Date(`${day}-${month}-${year}`).getFullYear();
    };
    
    const yearStart = data.map((item) => {
        /* Bronnen
            https://stackoverflow.com/questions/53499762/how-to-split-a-date-string-and-get-the-resulting-strings-in-different-variables
            https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_getfullyear2
            Chat GPT
        */
       // Place the right years
        const year_start = extractYear(item.acf.years.year_start);
        const year_end = item.acf.years.year_end ? extractYear(item.acf.years.year_end) : "Heden"; // If no year_end than add Heden
        

        // Chat GPT
        return {
            ...item,
            acf: {
                ...item.acf,
                years: {
                    ...item.acf.years,
                    year_start, 
                    year_end, 
                },
            },
        };
    })

    const yearsCategory = {
        "2025": [],
        "2024": [],
        "2023": [],
        "2022": [],
        "2021": [],
        "2020": [],
        "2019": [],
        "2018": [],
        "2017": [],
        "2016": [],
    };

    // Chat GPT
    // Door elke item doorlopen van yearStart
    yearStart.forEach((item) => {
        const year = item.acf.years.year_start;

        // Als het jaar in yearsCategory bestaan, doe dan yearStart item in yearsCategory
        if (yearsCategory[year]) {
            yearsCategory[year].push(item);

        }
    });

    /* Bronnen 
        https://stackoverflow.com/questions/49865748/reverse-order-of-the-keys-for-an-object-entries-method
        Chat GPT
    */
    const sortedYearsCategory = Object.entries(yearsCategory)
    .filter(([year, items]) => items.length > 0)  
    .reverse(); 

    return (
        <section className={`${styles.section}`} id="ervaringen">
            <div>
                <h2 className="sec-h2">Ervaringen</h2>
                <ul tabIndex={-1}>
                    {/* Chat GPT */}
                    {sortedYearsCategory.map(([year, items], key) => (
                        <li key={key}>
                            <h3>{year}</h3>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <ExperienceCard item={item}/>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

import Thumbnail from "../../../../../cards/thumbnail";
import styles from "./projects.module.scss";

export default async function Projects() {
    const fetchData = await fetch('https://xiaonan.nl/wp-json/wp/v2/projects?acf_format=standard')
    const data = await fetchData.json();

    return (
        <main className={styles.section}>
            <h2 className="visually-hidden">Projecten</h2>
            <ul id="projecten">
                {data.map((item, key) => (
                    <li key={key}>
                        <Thumbnail
                            title={item.title.rendered}
                            goal={item.acf.goal}
                            img={item.acf.images[0]}
                            alt={item.title.rendered}
                            data={item}
                            slug={item.slug}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}
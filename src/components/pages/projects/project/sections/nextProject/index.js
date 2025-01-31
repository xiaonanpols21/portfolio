
import Link from "next/link";
import ThumbnailNext from "@/components/cards/thumbnailNext";
import styles from "./nextProject.module.scss";

export default function NextProject({data}) {

    return (
        <section className={styles.nextProject}>
        <div>
            <h3>Volgende project</h3>
            <Link href={`/projecten/${data.slug}`}>
                <ThumbnailNext
                    title={data.title.rendered}
                    goal={data.acf.goal}
                    img={data.acf.images[0]}
                    alt={data.title.rendered}
                    data={data}
                    classes={styles.thumbnail}
                />
            </Link>
        </div>
    </section>
    )
}
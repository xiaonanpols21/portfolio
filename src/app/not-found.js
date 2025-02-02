import Link from "next/link";
import Header from "@/components/header";
import Tags from "@/components/tags/skills";
import LinkPrimaire from "@/components/links/primaire";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <>
        <Header/>
        <main className={styles.main}>
            <h1 className="visually-hidden">Pagina niet gevoden</h1>

            <div>
                <h2>404</h2> 
                <p>Helaas is deze pagina niet te vinden</p>
                <LinkPrimaire
                    link={"/"}
                    aria="Over mij knop"
                    text={"Naar home"}
                />
            </div>
        </main>
    </>
  );
}

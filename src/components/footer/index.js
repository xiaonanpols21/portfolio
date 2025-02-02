import Link from "next/link";
import SocialMedia from "@/components/links/socialMedia";
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <ul>
                    <li><Link href="/over-mij">Over mij</Link> </li>
                    <li><Link href="/#projecten">Projecten</Link> </li>
                    <li><Link href="/#ervaringen">Ervaringen</Link> </li>
                    <li><Link href="/#contact">Contact</Link> </li>
                </ul>

                <div className="divider"></div>

                <section className={styles.socialMedia}>
                    <h3 className="visually-hidden">Social media</h3>
                    <ul>
                        <li>
                            <SocialMedia
                                link={"https://github.com/xiaonanpols21"}
                                aria="Github knop"
                                img={"../../img/icons/github.svg"}
                                alt={"Github icoon"}
                            />
                        </li>
                        <li>
                            <SocialMedia
                                link={"https://www.linkedin.com/in/xiao-nan-pols-b839951b5/"}
                                aria="Linkedin knop"
                                img={"../../img/icons/linkedin.svg"}
                                alt={"Linkedin icoon"}
                            />
                        </li>
                        <li>
                            <SocialMedia
                                link={"https://www.instagram.com/xiaonanpols21/"}
                                aria="Instagram knop"
                                img={"../../img/icons/instagram.svg"}
                                alt={"Instagram icoon"}
                            />
                        </li>
                    </ul>
                </section>

                <p>© 2025 {'{Xiao NaN}'}</p>
            </div>

        </footer>
    )
}
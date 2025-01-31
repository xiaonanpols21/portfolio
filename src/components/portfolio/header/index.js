"use client";
import { useState } from 'react';
import Link from "next/link";
import SocialMedia from "@/components/portfolio/links/socialMedia";
import styles from "./header.module.scss";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false); 
    };

    // Chat GPT
    const handleToggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className={`header ${styles.header}`}>
                <Link href="/portfolio">Xiao NaN</Link>
                <label className={`hamburger ${styles.hamburger}`}>
                    <input
                        type="checkbox"
                        checked={isMenuOpen}
                        onChange={handleToggleMenu} 
                    />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul>
                    <li><Link href="/portfolio/over-mij">Over mij</Link> </li>
                    <li><Link href="/portfolio#projecten">Projecten</Link> </li>
                    <li><Link href="/portfolio#ervaringen">Ervaringen</Link> </li>
                    <li><Link href="/portfolio#contact">Contact</Link> </li>
                </ul>
            </header>

            <nav className={`${isMenuOpen ? 'open-menu' : `${styles.closedMenu}`} ${styles.nav}`}>
                <ul>
                    <li><Link href="/portfolio/over-mij" onClick={handleLinkClick}>Over mij</Link> </li>
                    <li><Link href="/portfolio#projecten" onClick={handleLinkClick}>Projecten</Link> </li>
                    <li><Link href="/portfolio#ervaringen" onClick={handleLinkClick}>Ervaringen</Link> </li>
                    <li><Link href="/portfolio#contact" onClick={handleLinkClick}>Contact</Link> </li>
                </ul>

                <div className="divider"></div>

                <section className={styles.socialMedia}>
                    <h3 className="visually-hidden">Social media</h3>
                    <ul>
                        <li>
                            <SocialMedia
                                link={"https://github.com/xiaonanpols21"}
                                aria="Github knop"
                                img={"../../img/portfolio/icons/github.svg"}
                                alt={"Github icoon"}
                            />
                        </li>
                        <li>
                            <SocialMedia
                                link={"https://www.linkedin.com/in/xiao-nan-pols-b839951b5/"}
                                aria="Linkedin knop"
                                img={"../../img/portfolio/icons/linkedin.svg"}
                                alt={"Linkedin icoon"}
                            />
                        </li>
                        <li>
                            <SocialMedia
                                link={"https://www.instagram.com/xiaonanpols21/"}
                                aria="Instagram knop"
                                img={"../../img/portfolio/icons/instagram.svg"}
                                alt={"Instagram icoon"}
                            />
                        </li>
                    </ul>
                </section>

                <p>© 2025 {'{Xiao NaN}'}</p>
            </nav>
        </>
    );
}

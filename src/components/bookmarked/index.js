"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SaveBtn from "../buttons/saveBtn";
import styles from "./bookmarked.module.scss";

export default function Bookmarked() {
    const [savedFavorite, setSavedFavorite] = useState([]);

    useEffect(() => {
        try {
            const savedFavorite = localStorage.getItem("favorite");

            if (savedFavorite) {
                const parsedFavorite = JSON.parse(savedFavorite);
                if (Array.isArray(parsedFavorite)) {
                    setSavedFavorite(parsedFavorite);
                } else {
                    console.error("Invalid data in localStorage: expected an array");
                }
            }
        } catch (error) {
            console.error("Failed to parse localStorage data:", error);
        }
    }, []);

    return (
        <section className={styles.section}>
            <h3>Mijn favorieten</h3>
            {savedFavorite.length === 0 ? (
                <p>Je hebt nog geen favorieten toegevoegd.</p>
            ) : (
                <ul>
                    {savedFavorite.map((item, key) => (
                        <li key={key}>
                            <Link href="">
                                <article>
                                    <h4>{item.title}</h4>
                                    <div className={styles.overlay}>
                                        <Image
                                            src={item.img}
                                            width={300}
                                            height={360}
                                            alt={"Foto"}
                                        />
                                    </div>
                                    <SaveBtn
                                        title={item.title}
                                        img={item.img}
                                        classes={styles.saveBtn}
                                    />
                                </article>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
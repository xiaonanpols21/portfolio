"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./save.module.scss";

export default function SaveBtn({ title, img, classes }) {
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const savedFavorite = localStorage.getItem("favorite");
        if (savedFavorite) {
            setFavorite(JSON.parse(savedFavorite));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite));
    }, [favorite]);

    // Deepseek
    const saveToLocalStorage = (e) => {
        e.preventDefault();

        setFavorite((prevFavorite) => {
            const favoriteData = {
                title: title,
                img: img
            };

            if (prevFavorite.some((favorite) => favorite.title === favoriteData.title)) {
                return prevFavorite.filter((favorite) => favorite.title !== favoriteData.title);
            } else {
                return [...prevFavorite, favoriteData];
            }
        });
    };

    return (
        <button
            type="button"
            aria-label="Opslaan knop"
            className={`${styles.button} ${classes}`}
            onClick={saveToLocalStorage}
            title="Save to favorites"
        >
            <Image
                src={"/img/portfolio/icons/bookmark-solid.svg"}
                width={28}
                height={28}
                alt={"Opslaan icoon"}
            />
        </button>
    );
}
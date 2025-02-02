"use client";
import { useState, useEffect } from "react";
import styles from "./switch.module.scss";

export default function ToggleSwitch() {

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkmode");
        setIsChecked(storedDarkMode === "true");
    }, []);

    useEffect(() => {
        if (isChecked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isChecked]);

    const toggleSwitch = () => {
        setIsChecked((prev) => {
            const newCheckedState = !prev;
            localStorage.setItem("darkmode", newCheckedState.toString());
            return newCheckedState;
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleSwitch();
        }
    };

    return (
        <section className={styles.section}>
            <h4 className="visually-hidden">Donker, licht modus</h4>
            <label
                className={styles.switch}
                tabIndex={0}
                onKeyDown={handleKeyDown}
                onClick={toggleSwitch}
            >
                <input
                    type="checkbox"
                    aria-label="Donker en licht modus schakelaar"
                    tabIndex={-1}
                    checked={isChecked}
                    onChange={toggleSwitch}
                />
                <span></span>
            </label>
        </section>
    );
}

"use client";
import { useState, useEffect } from "react";
import styles from "./switch.module.scss";

export default function ToggleSwitch() {
    // Chat GPT
    const [isChecked, setIsChecked] = useState(false);

    const toggleSwitch = () => setIsChecked((prev) => !prev);

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault(); 
            toggleSwitch();
        }
    };

    useEffect(() => {
        if (isChecked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isChecked]); // Add isChecked as a dependency

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

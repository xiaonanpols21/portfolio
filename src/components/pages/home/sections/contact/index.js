"use client";
import { useState } from "react";
import Link from "next/link";
import emailjs from "emailjs-com";
import styles from "./contact.module.scss";

export default function Contact() {
    // Chat GPT
    const [formData, setFormData] = useState({
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setStatus("Versturen...");

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_JS, // Replace with your EmailJS Service ID
                process.env.NEXT_PUBLIC_TEMPLATE_JS, // Replace with your EmailJS Template ID
                {
                    email: formData.email,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_PUCLIC_KEY_JS // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setStatus("Bericht is succesvol verstuurd!");
                    setFormData({ email: "", message: "" }); // Clear the form
                },
                (error) => {
                    console.error("FAILED...", error);
                    setStatus("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <section className={`${styles.section}`} id="contact">
            <div>
                <h2>Contact</h2>
                <p> Kom graag met mij in contact in de wereld van development!</p>
                <p>Of <Link href="mailto:xiaonanpolspols@gmail.com">mail</Link> mij persoonlijk!</p>

                <form onSubmit={handleSubmit}>
                    <label>
                        E-mailadres
                        <input
                            type="email"
                            name="email"
                            placeholder="Jouw emailadres"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </label>

                    <label>
                        Bericht
                        <textarea
                            placeholder="Jouw bericht"
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                        />
                    </label>

                    <button type="submit">Versturen</button>
                    
                    {status && <p>{status}</p>}
                </form>
            </div>
        </section>
    );
}

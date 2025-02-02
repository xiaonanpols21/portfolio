"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import ImgSimple from "../../buttons/imgSimple";
import BtnPrimaireShadow from '../../buttons/primaireShadow';
import styles from "./slider.module.scss";

export default function Slider({ classes, data }) {
    const dialogRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Chat GPT
    const handleOpen = (img) => {
        setSelectedImage(img); 
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close(); 
    };

    return (
        <>
            <section className={`${styles.section} ${classes}`}>
                <h4 className="visually-hidden">Galerij slider</h4>
                <ul>
                    {data.acf.images.map((item, key) => (
                        <li key={key}>
                            <ImgSimple
                                img={item}
                                alt={"Project foto Xiao Design"}
                                classes={styles.gallery}
                                onClick={() => handleOpen(item)} // Pass the clicked image to the handler
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <dialog ref={dialogRef} className={styles.dialog}>
                {/* Chat GPT */}
                {selectedImage && ( 
                    <Image
                        src={selectedImage} 
                        width={800}
                        height={800}
                        alt={data.title.rendered}
                    />
                )}
                <BtnPrimaireShadow
                    aria="Sluit knop"
                    img={"../../img/icons/close.svg"}
                    alt={"Kruis icoon"}
                    classes={styles.closeBtn}
                    onClick={handleClose}
                />
            </dialog>
        </>
    );
}

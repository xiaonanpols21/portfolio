"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';
import ImgSimple from "@/components/cards/imgSimpleSec";
import ImgSimpleBtn from "../../buttons/imgSimple";
import ImgSimpleRadio from "../../cards/imgSimple";
import BtnPrimaireShadow from '../../buttons/primaireShadow';
import styles from "./radio.module.scss";

export default function Radio({classes, data}) {
    const dialogRef = useRef(null);            // Chat GPT
    const [selectedImage, setSelectedImage] = useState(data[0].gallery[0]);

    const changeImg = (img) => {
        setSelectedImage(img); 
    };

    const handleOpen = (img) => {
        setSelectedImage(img); 
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close(); 
    }; 

    return (
        <section className={`${styles.section} ${classes}`}>
            <h3 className="visually-hidden">Gallerij</h3>
            <div>
                {selectedImage && ( 
                    <>
                        <ImgSimpleBtn
                            img={selectedImage}
                            alt={"Profiel foto"}
                            classes={styles.heroImg}
                            onClick={() => handleOpen(selectedImage)}
                        />

                        <dialog ref={dialogRef} className={styles.dialog}>
                            {/* Chat GPT */}
                            {selectedImage && ( 
                                <Image
                                    src={selectedImage} 
                                    width={800}
                                    height={800}
                                    alt="Gekozen foto Xiao Design"
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

                )}
            
                <form>
                    {data[0].gallery.map((item, key) => (
                        <label key={key} tabIndex={0} onKeyPress={() => changeImg(item)}>
                            <input 
                                type="radio" 
                                name="img" 
                                onClick={() => changeImg(item)} 
                                defaultChecked={key === 0}
                                tabIndex={-1}
                            />
                            <ImgSimple
                                img={item}
                                alt={"Project foto Xiao Design"}
                                classes={styles.chooseImg}
                            />
                        </label>
                    ))}
                </form>
            </div>

        </section>
     
    )
}
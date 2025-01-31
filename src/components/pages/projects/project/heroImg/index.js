"use client";
import { useRef} from 'react';
import Image from 'next/image';
import ImgSimple from "@/components/buttons/imgSimple";
import BtnPrimaireShadow from '@/components/buttons/primaireShadow';
import styles from "./heroImg.module.scss";

export default function HeroImg({data}) {
    const dialogRef = useRef(null);

    const handleOpen = () => {
        dialogRef.current.showModal();
    };

    const handleClose = () => {
        dialogRef.current.close();
    };

    return (
        <>
            <ImgSimple
                img={data.acf.images[0]}
                alt={data.title.rendered}
                classes={styles.heroImg}
                onClick={handleOpen}
            />
            
            <dialog ref={dialogRef} className={styles.dialog}>
                <Image
                    src={data.acf.images[0]}
                    width={800}
                    height={800}
                    alt={data.title.rendered}
                />
                <BtnPrimaireShadow
                    aria="Sluit knop"
                    img={"../../img/portfolio/icons/close.svg"}
                    alt={"Kruis icoon"}
                    classes={styles.closeBtn}
                    onClick={handleClose}
                />
            </dialog>
        </>
    )
}
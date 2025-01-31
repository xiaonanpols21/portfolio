import Image from "next/image";

import styles from "./btn.module.scss";

export default function PrimaireShadow({aria, img, alt, classes, onClick}) {
    return (
        <button 
            className={`${styles.btn} ${classes}`} 
            aria-label={aria} 
            onClick={onClick}
        >
            <Image
                src={img}
                width={28}
                height={28}
                alt={alt}
            />
        </button>
    )
}
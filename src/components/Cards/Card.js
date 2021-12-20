import React from "react";
import Image from "next/image"
import styles from "./Card.module.css";
import AppButton from "../Buttons/Buttons";
import buttonStyle from "../Buttons/Buttons.module.css";
import PropertyImage from '../../../public/images/property1.jpg'

const PropertyCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <a href="#">
                    <Image class="rounded-t-lg" src={PropertyImage} layout="fill" objectFit="fill"/>
                </a>
            </div>
            <div className={styles.cardContent}>
                <a href="#">
                    <h5 className={styles.propertyTitle}>Cabane pour deux personnes</h5>
                </a>
                <p className={styles.propertyLocation}>Normandie - France</p>
                <AppButton Content="Reserver" styleparam={buttonStyle.redMeduimButton} />
            </div>
        </div>
    );
};

export default PropertyCard;
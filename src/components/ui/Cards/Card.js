import React from "react";
import Image from "next/image"
import styles from "./Card.module.css";
import AppButton from "../Buttons/Buttons";
import buttonStyle from "../Buttons/Buttons.module.css";
import PropertyImage from '../../../../public/images/property1.jpg'

const PropertyCard = (props) => {
    return (
            <>
                {props.propertyData.map(data => {
                    return (
                        <div className={styles.cardContainer} key={data.id}>
                            <div className={styles.imageContainer}>
                                <a href="#">
                                    <Image className="rounded-t-lg" src={PropertyImage} layout="fill" objectFit="fill"/>
                                </a>
                            </div>
                            <div className={styles.cardContent}>
                                <a href="#">
                                    <h5 className={styles.propertyTitle}>{data.title}</h5>
                                </a>
                                <p className={styles.propertyLocation}>{data.location}</p>
                                <AppButton Content="Reserver" styleparam={buttonStyle.redMeduimButton} />
                            </div>
                        </div>
                    )
                }).slice(3)}
            </>

    );
};

export default PropertyCard;
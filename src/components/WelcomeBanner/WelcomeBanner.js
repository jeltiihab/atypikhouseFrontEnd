import React from "react";

import Image from "next/image";
import styles from "./WelcomeBanner.module.css"
import ButtonStyle from '../Buttons/Buttons.module.css'

const WelcomeBanner = () => {
    return (
        <>
                {/* START Left side of the login page */}
                <div className={styles.rightSide}>
                    <div>
                        <Image src="/../public/images/login-bg.jpg" layout="fill" objectFit="fill"/>
                        <div className={styles.layerDiv}>
                        </div>
                    </div>
                    <div className={styles.label}>
                        <h1 className={styles.AtypikhouseLabel}>ATYPIKHOUSE</h1>
                        <p> Le meilleure site d'hébergements insolites sur le web</p>
                        <button className={ButtonStyle.redLgButton}>
                            Devenir partenaire
                        </button>
                    </div>
                </div>
                {/* END Left side of the login page */}
        </>
    );
};

export default WelcomeBanner;
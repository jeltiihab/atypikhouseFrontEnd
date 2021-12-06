import React from "react";
import useNavigation from "../src/hooks/useNavigation";
import navigationData from "../src/data/navigation";

import Navbar from "../src/components/Navbar/Navbar";
import Tabbar from "../src/components/Tabbar/Tabbar";
import styles from "./login.module.css"
import Image from "next/image";

const Login = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
    return (
        <>
            <header>
                <Navbar
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />
                <Tabbar
                    navigationData={navigationData}
                    currentRoute={currentRoute}
                    setCurrentRoute={setCurrentRoute}
                />
            </header>
            <div className={styles.loginContainer}>
                {/* START right side of the login page */}
                <div className={styles.leftSide} style={{marginBottom: '40rem'}}>
                    <div className={styles.welcomeMsg}>
                        <h1 className={styles.AtypikhouseLabel}>Bonjour</h1>
                        <h2>Bienvenue</h2>
                        <div className={styles.loginForm}>
                            <div className="mb-4">
                                <input className={styles.formInputs} id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                                <input className={styles.formInputs} id="password" type="password" placeholder="Password" />
                            </div>
                            <div>
                                <button className={styles.loginButton} type="button">
                                    Sign In
                                </button>
                            </div>
                            <p className={styles.forgotpasswordLabel}>Mot de pass oublié ?</p>
                            <h2 className={styles.registerlink}>Première visite ? Créer un compte</h2>
                        </div>
                    </div>
                </div>
                {/* END right side of the login page */}

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
                        <button className={styles.partnerLoginButton}>
                            Devenir partenaire
                        </button>
                    </div>
                </div>
                {/* END Left side of the login page */}

            </div>
        </>
    );
};

export default Login;
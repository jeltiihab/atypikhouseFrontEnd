import React from "react";
import useNavigation from "../../src/hooks/useNavigation";
import navigationData from "../../src/data/navigation";
import Navbar from "../../src/components/Navbar/Navbar";
import Tabbar from "../../src/components/Tabbar/Tabbar";
import WelcomBanner from "../../src/components/WelcomeBanner/WelcomeBanner";
import styles from "../login/login.module.css"
import ButtonStyle from '../../src/components/Buttons/Buttons.module.css'

const Index = () => {
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
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input type="radio" className="form-radio" name="accountType" value="personal" />
                                        <span className="ml-2">Locataire</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input type="radio" className="form-radio" name="accountType" value="busines" />
                                        <span className="ml-2">Propriétaire</span>
                                </label>
                            </div>
                            <div className="mb-4">
                                <input className={styles.formInputs} id="nom" type="text" placeholder="Nom" />
                            </div>
                            <div className="mb-4">
                                <input className={styles.formInputs} id="prenom" type="text" placeholder="Prénom" />
                            </div>
                            <div className="mb-4">
                                <input className={styles.formInputs} id="email" type="text" placeholder="Email" />
                            </div>
                            <div className="mb-6">
                                <input className={styles.formInputs} id="password" type="password" placeholder="Mot de pass" />
                            </div>
                            <div className="mb-6">
                                <input className={styles.formInputs} id="password_repeat" type="password" placeholder="Retaper votre mot de pass" />
                            </div>
                            <div>
                                <button className={ButtonStyle.greenMdButton} type="button">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END right side of the login page */}
                <WelcomBanner/>
            </div>
        </>
    );
};

export default Index;
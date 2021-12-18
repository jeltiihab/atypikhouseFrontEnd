import React from "react";
import styles from './paimentValidation.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faMapMarkedAlt, faStarHalfAlt, faUser, paypal} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../src/components/Navbar/Navbar";
import navigationData from "../../src/data/navigation";
import Tabbar from "../../src/components/Tabbar/Tabbar";
import useNavigation from "../../src/hooks/useNavigation";
import AppButton from "../../src/components/Buttons/Buttons"
import buttonStyle from "../../src/components/Buttons/Buttons.module.css";
const paimentValidation = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
    return (
        <div className={styles.container}>
            <Navbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <div className={styles.validatePaimentcontainer}>
                <div className={styles.leftRightSide}>
                    <h2 className={styles.titles}>Demande de réservation</h2>
                    <div className={styles.propertyInfos}>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie1.jpg"} width={150} height={150}/></div>
                        <div>
                            <div>Cabane dans une arbre en normandie pour 3 personnes</div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarStarIcon} size="xs" icon={faStarHalfAlt} /> <label>3/5</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faMapMarkedAlt} /><label>Normandie</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faUser} /><label>User</label></div>
                        </div>
                        <div><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faHeart} /></div>
                    </div>
                    <h2>Votre voyage</h2>
                    <div>
                        <h4>Dates</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>20 Jan</label> - <label>26 Jan</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">Modifier</a>
                            </div>
                        </div>
                        <h4>Voyageurs</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>2 Adultes</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">Modifier</a>
                            </div>
                        </div>
                        <h4>Prix</h4>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>107</label> x <label>4</label>Nuits</p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">424.00 Euro</a>
                            </div>
                        </div>
                        <hr/>
                        <div className={styles.reservationInfos}>
                            <div>
                                <p><label>Total</label></p>
                            </div>
                            <div className={styles.actionLink}>
                                <a href="#">499.00 Euro</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.leftRightSide}>
                    <h2 className={styles.titles}>Payer avec</h2>
                    <div>
                        <div className={styles.paymentMethod}>
                            <div className={styles.paymentMethodItems}>
                                <input type="radio" className="form-radio" name="paimentType" value="paypal"/>
                                <Image className={styles.paimentIcons} src="/../public/icons/paypal.png" width={50} height={50} />
                            </div>
                            <div className={styles.paymentMethodItems}>
                                <input type="radio" className="form-radio" name="paimentType" value="card"/>
                                <Image className={styles.paimentIcons} src="/../public/icons/visa.png" width={50} height={50} />
                                <Image className={styles.paimentIcons} src="/../public/icons/maestro.png" width={50} height={30} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.formInputs} id="cartowner" type="text" placeholder="Nom sur la carte" />
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.formInputs} id="cardnumber" type="text" placeholder="Numéro sur la carte" />
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.formInputs} id="securitykey" type="text" placeholder="Code de sécurité" />
                    </div>
                    <div className={styles.conditondutilisation}>
                        <a href="#">Conditions d'utilisation</a>
                    </div>
                    <div className="flex justify-center my-6">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox"/>
                                <span className="ml-2">J'accepte la <span className="underline">politique de confidentialité</span>
                                </span>
                        </label>
                    </div>
                    <div className={styles.reservationButton}>
                        <AppButton styleparam={buttonStyle.reservationButtonDanger} Content="Réserver"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default paimentValidation;
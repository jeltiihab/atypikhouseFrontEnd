import React from 'react';
import emailjs from 'emailjs-com';

import styles from "./Contact.module.css";
import AppButton from '../../src/components/ui/Buttons/Buttons';
import buttonStyle from '../../src/components/ui/Buttons/Buttons.module.css';
import FilAriane from '../../src/components/ui/FilAriane/FilAriane';
import arianeStyle from '../../src/components/ui/FilAriane/FilAriane.module.css';

export default function contact() {

    // control 

    //https://fr.reactjs.org/docs/forms.html

    // https://www.telerik.com/blogs/up-and-running-with-react-form-validation
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const handleChange = (event) => {
        event.preventDefault();

        const { rep, value } = event.target;
        let errors = this.state.errors;

        switch (rep) {
            case 'name':
                errors.name =
                    value.length < 5
                        ? 'le nom doit contenir 5 lettre minimun'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'message':
                errors.message =
                    value.length < 10
                        ? 'messsage doit etre supprérieur à 10 caractere!'
                        : '';
                break;
            default:
                break;
        }
        debugger
        this.setState({ errors, [rep]: value });
    }
    // managed by EmailJS - react
    const sendEmail = (e) => {
        e.preventDefault();

        const service = 'service_23f7jbg';
        const template = 'template_atypikhouse';
        const idUser = 'user_BAcVyykn1VMCWhWqL16o1';

        emailjs.sendForm(service, template, e.target, idUser)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // resets the fields 
        e.target.reset();

    };


    return (
        <div>
                <FilAriane prevPageAriane="Nos Biens" currentPageAriane="Contact " arianeStyle="px-10"/>
                
           
            <main >
        
                <div className={styles.ContactContainer}>
                    {/* START right side of the contact page */}
                    <div className={styles.leftSide}>
                        {/* <FilAriane /> */}
                        <div className={styles.contactUs}>
                            <h1 className={styles.h1ContactUs}>Nous Contacter</h1>
                            <form onSubmit={sendEmail} className={styles.formContainer}>
                                <div className={styles.divflexUs}>
                                    <div className={styles.full10}>
                                        <input className={styles.inputUs} id="name" type="text" placeholder="Nom" name="name" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className={styles.divflexUs}>
                                    <div className={styles.full10}>
                                        <input className={styles.inputUs} id="email" type="email" placeholder="Mail" name="mail" />
                                    </div>
                                </div>
                                <div className={styles.divflexUs}>
                                    <div className={styles.full10}>
                                        <input className={styles.inputUs} id="object" type="text" placeholder="Objet" name="subject" />
                                    </div>
                                </div>
                                <div className={styles.divflexUs}>
                                    <div className={styles.full10}>
                                        <textarea
                                            className={styles.message}
                                            id="message"
                                            placeholder="Votre message svp!"
                                            name="message"></textarea>
                                    </div>
                                </div>
                                <div className={styles.divBtn}>
                                    <div className={styles.divdivBtn}>
                                        {/* <button className={styles.btn}>
                                            Envoyer
                                        </button> */}

                                        <AppButton Content="Valider" styleparam={buttonStyle.greenMdButton} />


                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* END right side of the contact page */}

                    {/* START Left side of the contact page */}
                    <div className={styles.rightSide}>
                        <div className={styles.mappy}>
                            <a href='https://www.google.fr/maps/dir//13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg/@48.8163088,2.6224499,15z/data=!4m17!1m7!3m6!1s0x47e60f87370e1411:0x86203560adcdc90c!2s13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg!3b1!8m2!3d48.816295!4d2.6311832!4m8!1m0!1m5!1m1!1s0x47e60f87370e1411:0x86203560adcdc90c!2m2!1d2.6311832!2d48.816295!3e3'
                            >
                                <img className="object-right-bottom w-150 h-150 border-0 border-opacity-5" src="./images/paris-map.jpg"></img>
                            </a>
                        </div>
                        <div className={styles.mappyAdresse}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <a href='https://www.google.fr/maps/dir//13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg/@48.8163088,2.6224499,15z/data=!4m17!1m7!3m6!1s0x47e60f87370e1411:0x86203560adcdc90c!2s13+Bd+de+Beaubourg,+77183+Croissy-Beaubourg!3b1!8m2!3d48.816295!4d2.6311832!4m8!1m0!1m5!1m1!1s0x47e60f87370e1411:0x86203560adcdc90c!2m2!1d2.6311832!2d48.816295!3e3'
                                className={styles.adresse}>
                                13 Boulevard de beaubourg Croissy
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <a href='https://mail.google.com/' className={styles.adresse}>
                                atypikhpise.zahi@gmail.com
                            </a>
                        </div>

                    </div>
                    {/* END Left side of the contact page */}

                </div>


            </main>
            {/* Footer*/}

        </div >
    )
}




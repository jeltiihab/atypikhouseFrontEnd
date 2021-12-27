import React from 'react';
import WelcomBanner from "../../src/components/core/WelcomeBanner/WelcomeBanner";
import styles from "../login/login.module.css"
import ButtonStyle from '../../src/components/ui/Buttons/Buttons.module.css'
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup"
import axios from "axios";
import DateControl from "../../src/components/ui/FormInputs/Datepicker"
import Input from "../../src/components/ui/FormInputs/Input"
import Select from "../../src/components/ui/FormInputs/Select"
import CheckBox from "../../src/components/ui/FormInputs/CheckBox"
import moment from 'moment'

const Index = () => {

    // Regex to verify the phone number
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    // This options will be mapped to create inputs from components
    const userRoleOptions = [
        {key: 'Locataire', value: 'ROLE_USER'},
        {key: 'Propriétaire', value: 'ROLE_PROP'}
    ];
    const userSexe = [
        {key: 'Homme', value: 'homme'},
        {key: 'Femme', value: 'femme'}
    ];
    const checkBoxOptions = [
        {key: "J\'accepte la politique de confidentialité", value: 'terms'}
    ];

    // Initial Values of form
    const initialValues = {
        userRole: "",
        firstName: "",
        lastName: "",
        birthDay: "",
        sexe: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
        //termsOfService: []
    };

    // Adding the schema for User with Yup
    const userschema = yup.object().shape({
        userRole: yup.string().required(),
        firstName: yup
            .string().required("Le nom est un champ obligatoire").min(3, "Le nom doit comporter au moins 3 caractères"),
        lastName: yup
            .string()
            .required("Le prénom est un champ obligatoire")
            .min(3, "Le prénom doit comporter au moins 3 caractères"),
        birthDay: yup
            .string("Veuillez indiquer votre âge")
            .required("Veuillez indiquer votre âge")
            .test("Date de naissance", "Vous devez avoir au moins 18 ans", (value) => {
                return moment().diff(moment(value), "years") >= 18;
            })
            .nullable()
            /*.number()
            .required("Veuillez indiquer votre âge")
            .min(18, "Vous devez avoir au moins 18 ans")
            .max(99, "Vous devez avoir au plus 99 ans")*/,
        sexe: yup.string().required(),
        phone: yup.string().matches(phoneRegExp, 'Le numéro de téléphone n\'est pas valide'),
        email: yup
            .string()
            .email()
            .required("L'e-mail est un champ obligatoire"),
        password: yup
            .string()
            .required("Please enter your password")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial"
            ),
        confirmPassword: yup
            .string()
            .required("Veuillez confirmer votre mot de passe")
            .when("password", {
                is: password => (password && password.length > 0 ? true : false),
                then: yup.string().oneOf([yup.ref("password")], "Le mot de passe ne correspond pas")
            })
        /*termsOfService: yup
            .boolean()
            .required("The terms and conditions must be accepted.")
            .oneOf([true], "The terms and conditions must be accepted.")*/
    });

    const handleOnSubmit = async (values) => {
        // Convert the date to dd-mm-yyyy format
        const birthDay = values.birthDay;
        const FormatDate =
            birthDay.getDate() +
            "-" +
            (birthDay.getMonth() + 1) +
            "-" +
            birthDay.getFullYear();
        // Assing data with converted date to data
        const data = {...values, birthDay: FormatDate};
        console.log(data);
        // Making post http request
        const response = await axios.post("http://localhost:8000/api/users", data)
            .catch((err) => {
                if(err && err.response)
                    console.log("Error", err);
            });

        // if there is a response and a data then success
        if(response && response.data) {
            setSuccess(reeponse.data.message);
        }
        alert("OK")
    }
    /*const formik = useFormik ({
        initialValues: {
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
            validationSchema: userschema,
            onSubmit: (values, actions) => {
                alert(values);
                console.log(values);
                actions.resetForm();
            },
        }
    })*/
    /*const formik = useFormik({
        initialValues: {
            userRole: "",
            firstName: "",
            lastName: "",
            birthDay: "",
            sexe: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        userschema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });*/

    return (
        <Formik
            initialValues={{
                ...initialValues
            }}
            validationSchema={userschema}
            onSubmit={handleOnSubmit}
            >
            {(formik,errors, touched )=> (
                <div className={styles.loginContainer}>
                    {/* START right side of the login page */}
                    <div className={styles.leftSideRegister} style={{marginBottom: '40rem'}}>
                        <div className={styles.welcomeMsg}>
                            <h1 className={styles.AtypikhouseLabel}>Bonjour</h1>
                            <h2>Bienvenue</h2>
                            <Form className={styles.loginForm} autoComplete="off">
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-4 px-12 mb-4">
                                        <Input label="Nom" name="firstName" type="text"/>
                                        <Input label="Prénom"  name="lastName" type="text"/>
                                        <div className="grid grid-cols-3 col-span-2 gap-12">
                                            <Select label="Vous êtes ?"  name="userRole" options={userRoleOptions}/>
                                            <Select label="Sexe"  name="sexe" options={userSexe}/>
                                            <DateControl label="Date de naissance"  name="birthDay"/>
                                        </div>
                                        <Input label="Télephone"  name="phone" type="text"/>
                                        <Input label="Email"  name="email" type="email"/>
                                        <Input label="Mot de pass"  name="password" name="password" type="password"/>
                                        <Input label="Confirmer le mot de pass"  name="confirmPassword" type="password"/>
                                    </div>
                                <div className="flex justify-center my-6">
                                    <CheckBox name="termsOfService" options={checkBoxOptions}/>
                                </div>
                                    <div>
                                        <button className={ButtonStyle.greenMdButton} type="submit">
                                            S'inscrire
                                        </button>
                                    </div>
                            </Form>
                        </div>
                    </div>
                    <WelcomBanner/>
                </div>
                    )}
        </Formik>
    );
};

export default Index;
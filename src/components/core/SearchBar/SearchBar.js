import React from 'react'
import Input from "../../ui/FormInputs/Input"
import Select from "../../ui/FormInputs/Select"
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup"
import styles from './searchbar.module.css'
import ButtonStyle from '../../ui/Buttons/Buttons.module.css'
import { useRouter } from "next/router";

export default function SearchBar() {

    const router = useRouter();

        // Schema validation for Serach form
        const searchschema = yup.object().shape({
            destination: yup.string().required("Veuillez indiquer votre destination"),
            arrival: yup.string().required("Veuillez indiquer la date de d'arrivée").nullable(),
            departure: yup.string().required("Veuillez indiquer la date de départ").nullable(),
        });
    
    
        // Options to be mapped with our custom select 
        const maxTravelersOptions = [
            {key: '1', value: 1},
            {key: '2', value: 2},
            {key: '3', value: 3},
            {key: '4', value: 4},
            {key: '5', value: 5},
        ];
    
    
            // Initial Values of form
            const initialValues = {
                destination: "",
                arrival: "",
                departure: "",
                maxTravelers: ""
            };

            // This function collect search data and send it to search page
    const handleOnSubmit = (values) => {
        alert("OK")
        console.log(values)
        router.push({
            pathname: "/search",
            query: {
              destination: values.destination,
              arrival: values.arrival,
              departure: values.departure,
              maxTravelers: values.maxTravelers,
            },
          });
    }

    return (
        <div className={styles.searchBarContainer}>
            <Formik
                        initialValues={{
                            ...initialValues
                        }}
                        validationSchema={searchschema}
                        onSubmit={handleOnSubmit}
                    >
                        {(formik,errors, touched )=> (
                    <Form className={styles.BannerCalendar}>
                            <Input name="destination" type="text" placeholder="Destination"/>
                            <Input name="arrival" type="date"/>
                            <Input name="departure" type="date" />
                            <Select  name="maxTravelers" options={maxTravelersOptions}/>
                            <div className={styles.buttonDiv}>
                                <button className={ButtonStyle.greenMdButton} type="submit">
                                            Rechercher
                                </button>
                            </div>
                    </Form>
                    )}
            </Formik>
        </div>
    )
}

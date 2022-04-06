import React, {useEffect, useRef, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {useQuery} from "react-query"
import SearchBar from "../../src/components/core/SearchBar/SearchBar"
import styles from "./search.module.css"
import PropertyCard from "../../src/components/ui/Cards/Card"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Search() {

    const router = useRouter();
    const queries = router.query;
    const [properties, setProperties] = useState([]);

    // Instead of using state for error loading and the object itself we will use react query hook
    useEffect(() => {
        if(!router.isReady) return;
        let url = "/properties-limit"
        if (router.asPath !== router.route) {
            url = `/propertiesSearch?arrival=${queries.arrival}&departure=${queries.departure}&maxTraveler=${queries.maxTraveler}&destination=${queries.destination}`;
        }
        axios.get(url)
            .then( (response) => {
                if (response?.data?.arrival != null) {
                    toast.error("La date d'arrivée doit être supérieure à aujourd'hui", {theme: 'colored'});
                    return;
                } else if (response?.data?.departure != null) {
                    toast.error("Veuillez saisir la date de départ", {theme: 'colored'});
                    return;
                } else if (response?.data?.destination != null) {
                    toast.error("Veuillez saisir votre destination", {theme: 'colored'});
                    return;
                } else if (response?.data?.maxTraveler != null) {
                    toast.error("Veuillez saisir le nombre de voyageurs", {theme: 'colored'});
                    return;
                } else if(response.status == 200 && response?.data?.arrival == null && response?.data?.departure == null && response?.data?.destination == null && response?.data?.maxTraveler == null) {
                    setProperties(response?.data);
                } else {
                    toast.error("Une erreur est survenue veilleur réssayer.", {theme: 'colored'});
                    return;
                }
                //console.log(cardsData);
            })
            .catch((error) => {
                toast.error(error.response.data.detail,{
                    theme: 'colored'
                });
            });


    }, [router])

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
            <SearchBar />
            </div>
            <div className={styles.TitlesDiv}><h1 className={styles.Titles}>Explorer nos hébergements insolites</h1></div>
            <div className={styles.cardsContainer}>
                <PropertyCard propertyData = {properties} />
            </div>
            <ToastContainer />
        </div>
    )
}

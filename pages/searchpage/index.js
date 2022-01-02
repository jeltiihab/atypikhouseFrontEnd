import styles from "./searchpage.module.css"
import { useRouter } from 'next/router'
import axios from "axios";
import React, { useRef, useState, useEffect } from "react";

export default function SearchPage(props) {

    const router = useRouter()
    let param="";
    console.log(router.query.location);
    switch (router.query.location) {
        case "Paris":
            param="Paris"
            break;
        case "Marseille":
            param="Marseille"
            break;
        case "Toulouse":
            param="Toulouse"
            break;
        case "Toulon":
            param="Toulon"
            break;
    }

    const [searchedCity, setsearchedCity] = useState([]);

    const getsearchedCityData = ()  => {
        axios.get('/properties')
            .then( (response) => {
                //setCards(response.data)
                const searchedCityData = response.data['hydra:member'];
                setsearchedCity(searchedCityData);
                console.log(searchedCityData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    useEffect(getsearchedCityData, []);

    return (
        <div>
            {
                searchedCity?.map((item,i) => {
                    if(item.location === param) {
                        console.log(item.location)
                        return (
                            <div className={styles.container} key={i}>
                                <div className={styles.cardContainer}>
                                    <div className={styles.image}>
                                        <img className={styles.image} src="https://images.unsplash.com/photo-1509223197845-458d87318791" alt=""/>
                                        <div className="mt-4">
                                            <h1 className="text-2xl font-bold text-gray-700">{item.name}</h1>
                                            <p className="text-sm mt-2 text-gray-700">Two sizes</p>
                                            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                                                <button className="block text-xl font-semibold text-gray-700 cursor-auto">100 euro/nuit</button>
                                            </div>
                                            <button className={styles.button}>Réserver
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }

        </div>
    )
}

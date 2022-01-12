import { Route } from "react-router-dom";
import React, { useCallback, useState, useEffect, Component } from "react";
import classNames from "classnames";
import styles from "./CardsProperties.module.css";
import axios from "axios";
import InfoCards from "./InfoCards";
import property from "../../../../pages/property";
import Link from 'next/link';
import propertiesData from "../../../data/propertiesData";
import ReactPaginate from 'react-paginate';
import { useRouter } from "next/router";
import { Field, Formik } from "formik";
import FilAriane from "../../ui/FilAriane/FilAriane";
import arianeStyle from "../../ui/FilAriane/FilAriane.module.css";
import Pagination from '../Pagination/Pagination'
import { start } from "nprogress";



const CardsProperties = () => {

    const [cards, setCards] = useState([]);  // revoir le axios get d'ihab
    const [cardsCopy, setCardsCopy] = useState([]);  // revoir le axios get d'ihab
    const [types, setTypes] = useState([]);  // revoir le axios get d'ihab
    const [loading, setLoading] = useState(false);  // revoir le axios get d'ihab
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10); // nombre de cards affiché 

    // const state = {
    //     elementCards: cards,
    //     cardsCopy: []
    // }

  

    
    // get data properties

    const getproperties = () => {
        axios.get('/properties')
            .then((response) => {

                //setCards(response.data)
                const cardsData = response.data['hydra:member'];
                setCards(cardsData);
                setLoading(false)
                // console.log("dataaa " + cardsData);

            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });

    }

    useEffect((getproperties), [])


    const getproperty = () => {
        axios.get('/property_types')
            .then((response) => {
                //setCards(response.data)
                const propertyData = response.data['hydra:member'];
                setTypes(propertyData);
                // console.log(" propertyData " + propertyData);

            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });

    }

    useEffect((getproperty), [])



    const handleSelectType = (currentItem) => {
        
        let cardsCopy;

        if (currentItem === "") {
            cardsCopy = cards;
            console.log("Cabanes element " + cardsCopy)
        }

        else {
            cardsCopy = cards.filter( (elt, req) => ( elt.name === currentItem
            ));

                console.log(cardsCopy)
            
        }

     
        setCardsCopy(cardsCopy);

        // console.log("state.cardsCopy" + cardsCopy.id)

        
    }

   

    //
    const indexofLastCards = currentPage * cardsPerPage;
    const indexOfFirstCards = indexofLastCards - cardsPerPage;
    const currentCards = cardsCopy.slice(indexOfFirstCards, indexofLastCards);

    const pagination = (pageNumber) => setCurrentPage(pageNumber)




    // 
    return (

        <>
            <FilAriane prevPageAriane="Acceuil" currentPageAriane="Nos Biens" arianeStyle="px-10" />
            
            <React.Fragment>

                <div className={styles.containerNav}>
                    <div className={styles.contentMove}>
                        <nav className={styles.centerbar}>
                            {types.map((currentItem, index) => (
                                <Link href={{ pathname: '/properties', query: { currentItem: currentItem.type } }}>

                                    <div
                                        key={index}
                                        className={classNames([
                                            styles.tabItemActive
                                            // styles.tabItem, currentItem.type === currentItem && styles.tabItemActive,
                                        ])}
                                        onClick={(event) => {
                                            handleSelectType(currentItem.type)
                                        }}

                                    >
                                        <span>{currentItem.type}</span>

                                      

                                    </div>
                                </Link>

                                

                            ))

                            }
                        </nav>
                    </div>
                </div>

                <Pagination
                    totalCards={cards.length}
                    cardsPerPage={cardsPerPage}
                    pagination={pagination} />


                <InfoCards
                    // cards={currentCards}
                    cardsCopy={cardsCopy}
                    leading={loading}
                />
               
            </React.Fragment>


           
        </>

    )
};


export default CardsProperties;



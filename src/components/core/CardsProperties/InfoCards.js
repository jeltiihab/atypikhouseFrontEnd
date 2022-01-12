import styles from "./CardsProperties.module.css";
import Link from 'next/link';
import axios from "axios";
import Pagination from '../Pagination/Pagination'
import React, { useState, useEffect } from "react";




export default function InfoCards({ cardsCopy, ...props }) { //cards


    // if(props.loading) return <h2>Loading...</h2>

    // if(cardsCopy === "") return <div> { cardsCopy.push("No data") }</div>

    if((!cardsCopy.length>0)){
        return <div className="">Pas de données pour cette selection</div>
    }

    return (
        <>

            <div className={styles.gridCol}>
            
                {cardsCopy?.map(item => (
                    <Link href={{ pathname: '/property', query: { id: item.id } }}>
                        <div className={styles.place}>
                            {/* { item.description ? item.description : "2"} */}
                            <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
                                class="w-full object-cover object-center rounded-lg shadow-md" />
                            <div class={styles.properties}>
                                <div class={styles.contents}>
                                    <div class={styles.itemsContents}>
                                        <div class={styles.itemsRooms}>
                                            {item.rooms} &bull; {item.reviews} avis
                                        </div>
                                        <h4 class={styles.title}>{item.name}</h4>
                                        <div class={styles.contentPrice}>
                                            {item.price}
                                            <span className={styles.price}> /euro</span>
                                        </div>
                                        <div class={styles.annotation}>
                                            <span class={styles.ratings}>{item.rate}</span>
                                            <span class={styles.baseRating}>(base sur {item.rate} ratings)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                ))}

              

            </div>

        </>
    )
}



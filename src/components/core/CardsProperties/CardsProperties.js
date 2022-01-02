import { Route } from "react-router-dom";
import React, { useCallback, useState, useEffect } from "react";
import classNames from "classnames";
import styles from "./CardsProperties.module.css";
import Cabanes from "./Cabanes/Cabanes";
import Contact from "../../../../pages/contact";
import axios from "axios";
import InfoCards from "./InfoCards";
import property from "../../../../pages/property";
import Link from 'next/link';
import propertiesData from "../../../data/propertiesData";

// function CabanesFunc(){
//     return ( <Cabanes/>)
// }

// function Bulles(){
//     return ( <Contact/>)
// }

const CardsProperties = ({ navigationData, currentRoute, setCurrentRoute }) => {

    const [cards, setCards] = useState([]);

    const getNavProp = useCallback((item) => {
        switch (item) {
            case "Cabanes":
                return "Cabanes";

            case "Bulles":
                return "Bulles";

            case "En Amoureux":
                return "En Amoureux";

            case "En famille":
                return "En famille";

            case "A l aventure":
                return "A l aventure";
        }
    }, []);


    return (

        <>
            <div class={styles.containerNav}>
                <div className={styles.contentMove}>
                    <nav className={styles.centerbar}>
                        {navigationData.map((item, index) => (
                            <div
                                key={index}
                                className={classNames([
                                    styles.tabItem,
                                    currentRoute === item && styles.tabItemActive,
                                ])}
                                onClick={() => setCurrentRoute(item)}
                            >
                                <span>{getNavProp(item)}</span>
                            </div>
                        ))
                        }
                    </nav>
                </div>
                <Link href={{
                    pathname: `/property`,
                    query: { id: propertiesData.map( (i)  =>i.id )},
                    search:`?id=`,
                    hash:'#hash',
                    state: { isAdmin:true }
                }}>
                    <div className="">
                        <div class={styles.gridContent}>
                            <div className={styles.place}>
                                <div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                                    <InfoCards propertyData={propertiesData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>


        </>




        // <div className="px-4">
        //     <div class={styles.gridContent}>
        //     <div className={styles.place}>
        //         <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class={styles.img} />
        //                 {/* <div className={styles.contentAiOutlineHeart}> <AiOutlineHeart className={styles.AiOutlineHeart}/> </div> */}
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>


        //         <div className={styles.place}>
        //                 <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class="w-full object-cover object-center rounded-lg shadow-md" />
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>

        //         <div className={styles.place}>
        //                 <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class="w-full object-cover object-center rounded-lg shadow-md" />
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>


        //         <div className={styles.place}>
        //                 <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class="w-full object-cover object-center rounded-lg shadow-md" />
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>

        //         <div className={styles.place}>
        //                 <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class="w-full object-cover object-center rounded-lg shadow-md" />
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>


        //         <div className={styles.place}>
        //                 <div>
        //                 <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
        //                      class="w-full object-cover object-center rounded-lg shadow-md" />
        //                 <div class={styles.properties}>                            
        //                  <div class={styles.contents}>
        //                          <div class={styles.itemsContents}>
        //                              <div class={styles.itemsRooms}>
        //                                  2 baths &bull; 3 rooms
        //                              </div>

        //                              <h4 class={styles.title}>A random Title</h4>

        //                             <div class={styles.contentPrice}>
        //                                  $1800
        //                                  <span className={styles.price}> /wk</span>
        //                             </div>
        //                             <div class="mt-4">
        //                                 <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
        //                                 <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //            </div>
        //         </div>
        //     </div>
        // </div>
    )
};


export default CardsProperties;




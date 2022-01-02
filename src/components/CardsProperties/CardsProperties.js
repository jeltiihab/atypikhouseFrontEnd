import React, { useCallback } from "react";
import classNames from "classnames";
import styles from "./CardsProperties.module.css";
import InfoCards from "./InfoCards";
import { AiOutlineHeart } from "react-icons/ai";
import Cabanes from "./Cabanes/Cabanes";
import Contact from "../../../pages/Contact";


function CabanesFunc(){
    return ( <Cabanes/>)
}

function Bulles(){
    return ( <Contact/>)
}

const CardsProperties = ({ navigationData, currentRoute, setCurrentRoute }) => {
    const getNavProp = useCallback((item) => {
        switch (item) {
            case "Cabanes":

                return "Cabanes" ;

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
        <div>

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
            </div>
            
            <CabanesFunc/>
            {/* <div>{(currentRoute === "Bulles" ) && <Bulles/>}</div> */}


        </div>
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





{/* export async function getDataProperties() {

    const properties = [
        { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$49.99', rate: 1 / 2, description: 'Football', location: "france", room: 1 },
        { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$9.99', rate: 1 / 2, description: 'Baseball', location: "Paris", room: 6 },
        { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$29.99', rate: 1 / 6, description: 'Basketball', location: "Paris", room: 3 },
        { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$99.99', rate: 1 / 4, description: 'iPod Touch', location: "Paris", room: 5 },
        { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$399.99', rate: 2 / 4, description: 'iPhone 5', location: "france", room: 6 },
        { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$199.99', rate: 1 / 4, description: 'Nexus 7', location: "france", room: 8 }

    ];

    return {
        props: {
            properties
        }
    }
} */}














// import React, { useCallback } from "react";
// import classNames from "classnames";
// import styles from "./CardsProperties.module.css";
// import InfoCards from "./InfoCards";


// const CardsProperties = (properties) => {

//     return (
//         <div className="px-4">
//             <div class={styles.gridContent}>
//                 <div className={styles.place}>
//                     <div class={styles.cardsContents}>1
//                         {/* {properties.map(
//                             ({ image, title, price, rate, room, location }
//                             ) => (
//                                 // item.property.room;
//                                 <InfoCards
//                                     key={item.image}
//                                     image={image}
//                                     title={title}
//                                     price={price}
//                                     rate={rate}
//                                     room={room}
//                                     location={location}
//                                 />
//                             )
//                         )} */}
//                     </div>
//                 </div>
//                 <div className={styles.place}>9</div>
//                 <div className={styles.place}>1</div>
//                 <div className={styles.place}>9</div>
//                 <div className={styles.place}>1</div>
//                 <div className={styles.place}>9</div>
//                 <div className={styles.place}>1</div>
//                 <div className={styles.place}>9</div>
//                 <div className={styles.place}>1</div>
//                 <div className={styles.place}>9</div>
//                 <div className={styles.place}>1</div>
//                 <div className={styles.place}>9</div>
//             </div>
//             {/* <div className={styles.cardContainer}>
//                 <div class={styles.cardsContents}>
//                     <div>
//                         <img src="https://source.unsplash.com/random/350x350" alt=" random imgee"
//                             class="w-full object-cover object-center rounded-lg shadow-md" />
//                         <div class={styles.properties}>
//                             <div class={styles.contents}>
//                                 <div class={styles.itemsContents}>
//                                     <div class={styles.itemsRooms}>
//                                         2 baths &bull; 3 rooms
//                                     </div>

//                                     <h4 class={styles.title}>A random Title</h4>

//                                     <div class={styles.contentPrice}>
//                                         $1800
//                                         <span className={styles.price}> /wk</span>
//                                     </div>
//                                     <div class="mt-4">
//                                         <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
//                                         <span class="text-sm text-gray-600">(based on 234 ratings)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

                    
//                 </div>
//             </div> */}
//         </div>


//         // video airbnb
//         // <div className={styles.cardContainer}>
//         //     <div class={styles.cardsContents}>
//         //         <div class={styles.cardsContentsItems}>
//         //             <div className={styles.propertiesInf}>
//         //                 <img class={styles.cardImage} src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt=""></img>
//         //                 <div className={styles.propertiesElemnts}>
//         //                     <div className={styles.contentsProperties}>
//         //                         <p>location</p>
//         //                         <sapn class={styles.heart}>heart</sapn>
//         //                         <h1 className={styles.title}>title</h1>

//         //                         <div className={styles.space}></div>

//         //                         <p className={styles.description}>description</p>

//         //                         <div className={styles.contentBottom}>
//         //                             <p className={styles.contentStartIcon}>
//         //                                 <span className={styles.startIcon}>start icon</span>
//         //                             </p>
//         //                             <p className={styles.price}>price</p>
//         //                             <p className={styles.sum}>sum</p>
//         //                         </div>
//         //                     </div>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </div>


//         // </div>
//     )
// };


// export default CardsProperties;





// export async function getDataProperties() {

//     const properties = [
//         { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$49.99', rate: 1 / 2, description: 'Football', location: "france", room: 1 },
//         { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$9.99', rate: 1 / 2, description: 'Baseball', location: "Paris", room: 6 },
//         { image: "https://source.unsplash.com/random/350x350", title: 'Sporting Goods', price: '$29.99', rate: 1 / 6, description: 'Basketball', location: "Paris", room: 3 },
//         { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$99.99', rate: 1 / 4, description: 'iPod Touch', location: "Paris", room: 5 },
//         { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$399.99', rate: 2 / 4, description: 'iPhone 5', location: "france", room: 6 },
//         { image: "https://source.unsplash.com/random/350x350", title: 'Electronics', price: '$199.99', rate: 1 / 4, description: 'Nexus 7', location: "france", room: 8 }

//     ];

//     return {
//         props: {
//             properties
//         }
//     }
// }


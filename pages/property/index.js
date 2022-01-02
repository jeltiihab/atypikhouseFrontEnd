import React from "react";
import {useState} from "react";
import Image from "next/image";
import Map from '../../src/components/ui/Map/Map'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import AppButton from "../../src/components/ui/Buttons/Buttons"
import styles from "./property.module.css"
import buttonStyle from "../../src/components/ui/Buttons/Buttons.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faMapMarkedAlt, faUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import property from "../../src/data/propertiesData";
import { useRouter } from "next/router";



const Property = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setendDate] = useState(new Date());
   // const [property, setProperty] = useState();

    
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    };



    // https://programmingwithmosh.com/javascript/axios-in-react-bring-your-data-to-the-front/
    // get data after Click on "Nos Biens"
    // const getProperty = async () => {
    //     const id = this.props.match.params.id // we grab the ID from the URL
    //     const {data} = await axios.get(`/properties/${id}`)
    //     this.setProperty({property: data})       
    // }


      
    return (
            <div className={styles.container}>
                <div className={styles.propertyTitle}>
                    {/* <h1>Cabane dans une arbre en normandie pour 3 personnes</h1> */}
                </div>
                <div className={styles.infoBar}>
                    <div>
                        <div className={styles.infoBarLeftSide}>
                            <div className={styles.infoBarItems}><label>{property.rate}</label></div>
                            {/* <div className={styles.infoBarItems}><label>3/5</label></div> */}
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faMapMarkedAlt} /><label>Normandie</label></div>
                            <div className={styles.infoBarItems}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faUser} /><label>User</label></div>
                        </div>
                    </div>
                    <div className={styles.infoBarRightSide}><FontAwesomeIcon className={styles.infoBarIcons} size="xs" icon={faHeart} /></div>
                </div>
                <div className={styles.galleryContainer}>
                    <div className={styles.leftSideGallery}>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie1.jpg"} width={1000} height={500}/></div>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie2.jpg"} width={1000} height={500}/></div>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie3.jpg"} width={1000} height={500}/></div>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie4.jpg"} width={1000} height={500}/></div> 
                    </div>
                    <div>
                        <div><Image className={styles.propertyPictures} src={"/../public/galerie4.jpg"} width={1500} height={778}/></div>
                    </div>
                </div>
                <div className={styles.tenantInfos}>
                    <h2>Cabane loué par <span>{property.name}</span></h2>
                    {/* <h2>Cabane loué par <span>Jeremy XAVIER</span></h2> */}
                    <FontAwesomeIcon className={styles.infoBarIcons} icon={faUser} />
                </div>
                <hr/>
                <div className={styles.descriptionAndReservationBlock}>
                    <div className={styles.propertyDescription}>
                        <h3>Description</h3>
                        <p>
                            {property.description}
                        </p>
                        {/* <h3>Description</h3> */}
                        {/* <p>
                            Situé à 2,1 km du château de la Motte Noszvaj, Le TreeHouses Noszvaj propose un service de prêt de vélos, un jardin et des hébergements climatisés dotés d'un balcon et d'une connexion Wi-Fi gratuite.
                            Chaque logement dispose d'une terrasse offrant une vue sur le lac, d'une télévision par satellite à écran plat, d'une cuisine bien équipée et d'une salle de bains privative avec bain à remous, sèche-cheveux et articles de toilette gratuits. Vous pourrez profiter d'un micro-ondes, d'un réfrigérateur, d'un grille-pain, d'une bouilloire et d'une machine à café.
                            Un petit-déjeuner anglais/irlandais complet est servi sur place.
                            L'espace bien-être du TreeHouses Noszvaj comprend un bain à remous et un sauna.
                            Vous pourrez pratiquer la randonnée et la pêche dans les environs.
                            Les couples apprécient particulièrement l'emplacement de cet établissement. Ils lui donnent la note de 9,4 pour un séjour à deux.
                        </p> */}
                    </div>
                    <div className={styles.reservationForm}>
                        <h4>Vérifier vos disponibilités et les prix</h4>
                        <div>
                            <DateRange
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#C64756"]}
                            onChange={handleSelect}
                            retainEndDateOnFirstSelection={false}
                            moveRangeOnFirstSelection={false}
                            />
                            <div className={styles.buttonDiv}>
                                <AppButton styleparam={buttonStyle.redLgButton} Content="Vérifier les disponibilités" />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className={styles.equipementsImagesContainer}>
                        <div className={styles.equipementTitle}>
                            <h3>Equipements</h3>
                        </div>
                        <div className={styles.equipementsImages}>
                            {/* <Image src={property.image} width={40} height={40} objectFit="contain"/>
                            {/* <Image src="/../public/icons/wifi.png" width={40} height={40} objectFit="contain"/> */}
                            <Image src="/../public/icons/air-conditioner.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/cable-car-cabin.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/kayak.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/refrigerator.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/restaurant.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/room-service-1.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/room-service-2.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/swimming-pool.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/television.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/towel.png" width={40} height={40} objectFit="contain"/>
                            <Image src="/../public/icons/washing-machine.png" width={40} height={40} objectFit="contain"/>
                        </div>
                    </div>
                <hr/>
                    <div className={styles.mapStyle}>
                        <h3>Carte</h3>
                        <Map/>
                    </div>
            </div>
    );
};

export default Property;
import React, { useRef, useState, useEffect } from "react";
import styles from './home.module.css'
import Image from 'next/image'
import { NextSeo } from 'next-seo';
import Link from 'next/link'
import AppButton from '../../src/components/ui/Buttons/Buttons'
import buttonStyle from '../../src/components/ui/Buttons/Buttons.module.css'
import PropertyCard from "../../src/components/ui/Cards/Card";
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import BannerImage from '../../public/images/banner.jpg'
import JoinUsImage from '../../public/images/joinus.jpg'
import SmallCard from '../../src/components/core/SmallCards/SmallCards'
import axios from "axios";
import SmallCardsData from "../../src/data/smallCards"
import { useRouter } from "next/router";
import SearchBar from "../../src/components/core/SearchBar/SearchBar"


const Home = () => {

    const [cards, setCards] = useState([]);
    const router = useRouter();

    // Getting data for the three cards in the home page ( 3 Only )    
    const getCardsData = ()  => {
        axios.get('/properties/three-last')
            .then( (response) => {
                const cardsData = response.data
                setCards(cardsData);
                //console.log(cardsData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }
    useEffect(getCardsData, []);

    return (
        <div className={styles.homeContainer}>
            <NextSeo
                title="AtypikHouse - Site de Réservation d'habitats alternatifs"
                description="AtypikHouse, Le site incontournable pour choisir un hébergement insolite. Trouvez l'hôtel ou la nuit insolite de vos rêves!"

            />
                <div className={styles.banner}>
                    <Image src={BannerImage} layout="fill" objectFit="fill" loading="eager" alt="Atypik House Meilleure site d'hébergements insolites sur le web"/>
                    <div className={styles.bannerTitles}>
                        <Typewriter   options={{
                            strings: ['<span style="color: indianred">ATYPIK</span> HOUSE', 'Trouvez votre prochain <span style="color: darkgreen">séjour</span> dans plus de <span style="color: indianred">460 biens !</span>'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>

                    <div className={styles.SerachBar}>
                        <input id="search" type="text" placeholder="Lancer votre recherche"/>
                        <FontAwesomeIcon className={styles.searchIcon} size="xs" icon={faSearch} />
                    </div>
                    <div className={styles.bannerMiddleBtns}>
                        <Link href="/search">
                            <a>
                                <AppButton Content="Reserver Maintenant !" styleparam={buttonStyle.redSquareButton} />
                            </a>
                        </Link>
                        <Link href="/contact">
                            <a>
                                <AppButton Content="Contactez nous" styleparam={buttonStyle.redSquareButton} />
                            </a>
                        </Link>
                    </div>
                    <SearchBar />
                </div>
            <div className={styles.ourOffres}>
                <div className={styles.ourOffresTitle}>
                    <h1 className={styles.Titles}>Nos offres du moments</h1>
                </div>
                <div className={styles.cardsDiv}>
                    <PropertyCard propertyData={cards}/>
                </div>
            </div>
            <div className={styles.ourOffresTitle}>
                <h2 className={styles.Titles}>Nous rejoindre <FontAwesomeIcon className={styles.heartIcon} size="xs" icon={faHeart} /></h2>
                <div className={styles.joinUsContainer}>
                    <Image src={JoinUsImage} layout="fill" objectFit="fill" alt="Rejoignez-nous et commencer une aventure d'hébergement insolite"/>
                    <div className={styles.layerDiv}></div>
                    <div className={styles.label}>
                        <Typewriter   options={{
                            strings: ['<span style="color: indianred">ATYPIK</span> HOUSE', 'TOUCHEZ VOS RÊVES'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        <p className={styles.boldText}>Venez nous rejoindre dans cette experience pour devenir un hôte Atypik et béneficiez de revenue supplémentaire</p>
                        <button className={buttonStyle.redLgButton}>
                            Devenir partenaire
                        </button>
                    </div>
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-8 sm:px-16">
            <section className="pt-6">
                <h2 className="text-4xl font-semibold pb-5">Explorer à proximité</h2>
                {/* Pull the data from the server - static rendering for the front page */}
                <div  className={styles.smallcardsContainer}>
                    {SmallCardsData?.map((item, i) => (
                    <Link href={{ pathname: '/searchpage', query: { location: item.location } }} key={item.i}>
                        <div key={item.i}>
                                <SmallCard
                                    key={item.location}
                                    img={item.img}
                                    distance={item.distance}
                                    location={item.location}
                                />
                        </div>
                    </Link>
                    ))}
                </div>
            </section>
            </main>
            <div style={{marginBottom: '50px'}}>

            </div>
        </div>
    );
};

export default Home;
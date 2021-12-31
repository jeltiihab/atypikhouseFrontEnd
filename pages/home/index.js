import React, { useRef, useState, useEffect } from "react";
import styles from './home.module.css'
import Image from 'next/image'
import AppButton from '../../src/components/ui/Buttons/Buttons'
import buttonStyle from '../../src/components/ui/Buttons/Buttons.module.css'
import PropertyCard from "../../src/components/ui/Cards/Card";
import Typewriter from 'typewriter-effect';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch} from "@fortawesome/free-solid-svg-icons";
import Footer from '../../src/components/core/Footer/Footer'
import BannerImage from '../../public/images/banner.jpg'
import JoinUsImage from '../../public/images/joinus.jpg'
import SmallCard from '../../src/components/core/SmallCards/SmallCards'
import axios from "axios";
import SmallCardsData from "../../src/data/smallCards"

const Home = () => {

    const [cards, setCards] = useState([]);
    const getCardsData = ()  => {
        axios.get('/properties')
            .then( (response) => {
                //setCards(response.data)
                const cardsData = response.data['hydra:member'];
                setCards(cardsData);
                console.log(cardsData);
            })
            .catch((error) => {
                console.log(`We have a server error`, error);
            });
    }

    useEffect(getCardsData, []);

    return (
        <div className={styles.homeContainer}>
                <div className={styles.banner}>
                    <Image src={BannerImage} layout="fill" objectFit="fill" loading="eager"/>
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
                        <AppButton Content="Reserver Maintenant !" styleparam={buttonStyle.redSquareButton} />
                        <AppButton Content="Contactez nous" styleparam={buttonStyle.redSquareButton} />
                    </div>
                    <div className={styles.BannerCalendar}>
                        <div>
                            <input className={styles.formInputs} id="destination" type="text" placeholder="Destination" />
                        </div>
                        <div>
                            <input className={styles.formInputs} id="departure" type="date" placeholder="Date de départ" />
                        </div>
                        <div>
                            <input className={styles.formInputs} id="retour" type="date" placeholder="Date de retour" />
                        </div>
                        <div>
                            <select className={styles.formInputs} name="travelers" id="travelers-select">
                                <option value="">Voyageurs</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className={styles.buttonDiv}>
                            <AppButton Content="Rechercher" styleparam={buttonStyle.greenSmButton} />
                        </div>
                    </div>
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
                <h1 className={styles.Titles}>Nous rejoindre <FontAwesomeIcon className={styles.heartIcon} size="xs" icon={faHeart} /></h1>
                <div className={styles.joinUsContainer}>
                    <Image src={JoinUsImage} layout="fill" objectFit="fill"/>
                    <div className={styles.layerDiv}></div>
                    <div className={styles.label}>
                        <Typewriter   options={{
                            strings: ['<span style="color: indianred">ATYPIK</span> HOUSE', 'TOUCHEZ VOS RÊVES'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        <p>Venez nous rejoindre dans cette experience pour devenir un hôte Atypik et béneficiez de revenue supplémentaire</p>
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
                <div className={styles.smallcardsContainer}>
                    {SmallCardsData?.map(item => (
                        <SmallCard
                            key={item.location}
                            img={item.img}
                            distance={item.distance}
                            location={item.location}
                        />
                    ))}
                </div>
            </section>
            </main>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                <div className={styles.testimonialDiv}>
                    <div className={styles.testimonialContainer}>
                        <div className="w-full max-w-6xl mx-auto">
                            <div className="text-center max-w-xl mx-auto">
                                <h1 className={styles.Titles}>Ce que les gens disent. <br/> de notre site Web.</h1>
                                <div className="text-center mb-10">
                                    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                                    <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                                    <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=1" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kenzie
                                                    Edgar.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione
                                                dolor exercitationem minima quas itaque saepe quasi architecto vel!
                                                Accusantium, vero sint recusandae cum tempora nemo commodi soluta
                                                deleniti.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=2" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Stevie
                                                    Tifft.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum, dolor sit amet, consectetur adipisicing elit. Dolore quod
                                                necessitatibus, labore sapiente, est, dignissimos ullam error ipsam sint
                                                quam tempora vel.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Tommie
                                                    Ewart.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet, consectetur adipisicing elit. Vitae, obcaecati
                                                ullam excepturi dicta error deleniti sequi.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=4" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Charlie
                                                    Howse.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore
                                                voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos
                                                neque reprehenderit natus, hic sequi itaque dicta nisi voluptatem!
                                                Culpa, iusto.<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-1/3">
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Nevada
                                                    Herbertson.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem
                                                porro obcaecati dicta, quibusdam sunt ipsum, laboriosam nostrum facere
                                                exercitationem pariatur deserunt tempora molestiae assumenda nesciunt
                                                alias eius? Illo, autem!<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={styles.testimonialCard}>
                                        <div className="w-full flex mb-4 items-center">
                                            <div
                                                className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                <img src="https://i.pravatar.cc/100?img=6" alt=""/>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-bold text-sm uppercase text-gray-600">Kris
                                                    Stanton.</h6>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-sm leading-tight"><span
                                                className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iusto,
                                                explicabo, cupiditate quas totam!<span
                                                    className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default Home;
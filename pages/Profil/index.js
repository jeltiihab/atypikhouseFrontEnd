import { AiOutlineProfile, AiOutlineNotification } from "react-icons/ai";
import ProfilCards from "../../src/components/ProfilCards/ProfilCards";
import ProfilForm from "../../src/components/ProfilForm/ProfilForm";
import styles from "./Profil.module.css";
import PrivatRoute from "../../utils/PrivateRoute"
import withAuth from "../../utils/withAuth";
// ne pas oubliez la page de la résilliation du compte client 

function Index() {
    return (
        <div>
            <div className={styles.chevronLeft}><a href="/home"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg></a></div>
            <section className={styles.containerTop}>
                <div>
                    <div className={styles.containerUser}>
                        <div className={styles.contentUser}>
                            <div class={styles.contentImg}>
                                <img
                                    class={styles.img}
                                    src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                                    alt="profil atypikhouse"
                                />

                            </div>
                            <div className={styles.containerRight}>
                                <div className={styles.contentRight}>
                                    <div className="flex">
                                        <h1 className={styles.text}>Comptes</h1>

                                    </div>
                                    <div className="">
                                        <div className="flex">
                                            <span className={styles.infos}>Prenom + nom</span>
                                        </div>

                                        {/* // UpdateProfil with nextJs https://www.youtube.com/watch?v=gj-nltR0ce4 */}
                                        <div className="flex"><span className={styles.updateProfil}><a>Mis à jour profil</a></span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <div className={styles.containerBottom}>
                {/* <ProfilCards/> */}
                <ProfilForm />
            </div>
            <div className={styles.unsubscribe}>
                <span>Chez client, dites nous pourquoi vous nous quittez ? </span>
                <span ><a href="/unSubscrabe" className={styles.unsubscribeClick}>Déconnexion</a></span></div>
        </div>
    )
}


export default withAuth(Index);



// Pour la page l'ajout d'u bien https://tailwindui.com/components/application-ui/forms/form-layouts

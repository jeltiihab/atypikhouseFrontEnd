import Navbar from "../../src/components/Navbar/Navbar";
import Tabbar from "../../src/components/Tabbar/Tabbar";
import useNavigation from "../../src/hooks/useNavigation";
import navigationData from "../../src/data/navigation";
import styles from "./SearchPage.module.css"
import { AiFillFilter } from "react-icons/ai";
import CardsProperties from "../../src/components/CardsProperties/CardsProperties";
import Properties from "../Porperties";
import Cabanes from "../../src/components/CardsProperties/Cabanes/Cabanes";


export default function SearchPage() {
    const { currentRoute, setCurrentRoute } = useNavigation();

    return (
        <div>
            <Navbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <main className={styles.container}>
                <section >
                    <div className={styles.content}>
                        <p className={styles.recapSearch}> 300 + stay for 5 number of guests</p>

                        <h1 className={styles.title}>Stay Atypik</h1>

                        <div className={styles.list}>
                            <div className={styles.type}>
                                <p className={styles.items}>Prix</p>
                                <p className={styles.items}>type de logement</p>
                                <p className={styles.items}>Equipements</p>
                            </div>
                            <div>
                                <button type="button" class={styles.button} data-toggle="collapse" data-target="#filters"><span className={styles.textFilter}>Filters</span> <AiFillFilter class={styles.iconFilter} /></button>
                            </div>
                        </div>
                    </div>
                </section  >
                <section className={styles.containerBottom}>
                    <Cabanes/> 
                    
                </section>
            </main >
        <Tabbar
            navigationData={navigationData}
            currentRoute={currentRoute}
            setCurrentRoute={setCurrentRoute}
        />
        </div >
    )
}

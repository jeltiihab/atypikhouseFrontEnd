import CardsProperties from "../../src/components/CardsProperties/CardsProperties";
import Navbar from "../../src/components/Navbar/Navbar";
import NavPropperties from "../../src/components/NavigationProperties/NavProperties";
import Pagination from "../../src/components/Pagination/Pagination";
import Tabbar from "../../src/components/Tabbar/Tabbar";
import navigationData from "../../src/data/navigation";
import useNavigation from "../../src/hooks/useNavigation";
import Contact from "../Contact";
import navCardsData from "../../src/data/navigationProperties";



function Properties() {

    const { currentRoute, setCurrentRoute } = useNavigation();

    return (
        <div>
            
                <CardsProperties
                 navigationData={navCardsData}
                 currentRoute={currentRoute}
                 setCurrentRoute={setCurrentRoute}
            
                />

            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
        </div>
    )
}

export default Properties

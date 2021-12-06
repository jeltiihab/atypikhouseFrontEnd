import React from "react";
import { FaDev } from "react-icons/fa";

import useNavigation from "../src/hooks/useNavigation";
import navigationData from "../src/data/navigation";

import Navbar from "../src/components/Navbar/Navbar";
import Tabbar from "../src/components/Tabbar/Tabbar";

const App = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();

    return (
        <div >
            <Navbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
        </div>
    );
};

export default App;
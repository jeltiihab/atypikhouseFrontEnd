import React from "react";
import 'tailwindcss/tailwind.css'
import useNavigation from "../src/hooks/useNavigation";
import navigationData from "../src/data/navigation";
import Navbar from "../src/components/core/Navbar/Navbar";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";
import Register from "../pages/register/index"
import { useRouter } from 'next/router'
import Link from 'next/link'

const App = () => {
    const { currentRoute, setCurrentRoute } = useNavigation();
    return (
        <div >
            <Navbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Register/>
            <Tabbar
                navigationData={navigationData}
                currentRoute={currentRoute}
                setCurrentRoute={setCurrentRoute}
            />
            <Footer/>
        </div>
    );
};

export default App;
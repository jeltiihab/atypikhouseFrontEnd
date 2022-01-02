import React from "react";
import 'tailwindcss/tailwind.css'
import useNavigation from "../src/hooks/useNavigation";
import navigationData from "../src/data/navigation";
import Navbar from "../src/components/core/Navbar/Navbar";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";
import Register from "../pages/register/index";
import CookieConsent from "react-cookie-consent";

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
            <CookieConsent
                debug={true}
                cookieName="AtypikCookie"
                location="top"
                style={{background:'#000', textAlign:"center"}}
                expires={7}
            >Ce site utilise les cookies pour son bon fonctionnement <a href="/pages/Privacy/index.js"> <span style={{color:'#FFFF00'}}>Politique de confidentialité</span> </a> pour voir plus.</CookieConsent>

        </div>
    );
};

export default App;
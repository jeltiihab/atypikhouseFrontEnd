import React from "react";
import 'tailwindcss/tailwind.css'
import useNavigation from "../src/hooks/useNavigation";
import navigationData from "../src/data/navigation";
import Navbar from "../src/components/core/Navbar/Navbar";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";
import Home from "../pages/home/index"
import Properties from "../pages/properties/index"
import { useRouter } from 'next/router'
import Link from 'next/link'
import SearchPage from "../pages/searchpage/index"

const App = () => {
    return (
            <Home/>
    );
};

export default App;
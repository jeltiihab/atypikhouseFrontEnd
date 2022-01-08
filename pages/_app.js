import { QueryClient, QueryClientProvider } from 'react-query'
import useNavigation from "../src/hooks/useNavigation";
import 'tailwindcss/tailwind.css'
import Router from "next/router"
import Head from "next/head"
import axios from "axios"
import { AuthProvider } from '../context/AuthContext'


import NProgress from "nprogress"
import Navbar from "../src/components/core/Navbar/Navbar";
import navigationData from "../src/data/navigation";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";


const queryClient = new QueryClient();

Router.onRouteChangeStart = url => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

function MyApp({ Component, pageProps }) {
    const { currentRoute, setCurrentRoute } = useNavigation();
    return (
        <>
        <div className='min-h-[100vh] flex flex-col font-body'>
        <QueryClientProvider client={queryClient}>
        <AuthProvider>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
            </Head>
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
            <Component {...pageProps} />
            <Footer/>
        </AuthProvider>
        </QueryClientProvider>
        </div>
        </>
    )
}

export default MyApp
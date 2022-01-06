import 'tailwindcss/tailwind.css'
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"
import axios from "axios"
import Navbar from "../src/components/core/Navbar/Navbar";
import navigationData from "../src/data/navigation";
import Tabbar from "../src/components/core/Tabbar/Tabbar";
import Footer from "../src/components/core/Footer/Footer";
import useNavigation from "../src/hooks/useNavigation";
import { QueryClient, QueryClientProvider } from 'react-query'


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
        <div className='min-h-[100vh] flex flex-col'>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
        </div>
        </>
    )
}

export default MyApp
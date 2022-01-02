import 'tailwindcss/tailwind.css'
import NProgress from "nprogress"
import Head from "next/head"
import Router from "next/router"
import axios from "axios"

Router.onRouteChangeStart = url => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()

Router.onRouteChangeError = () => NProgress.done()

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function MyApp({ Component, pageProps }) {

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />
            </Head>
            <Component {...pageProps}/>
        </>
    )
}

export default MyApp
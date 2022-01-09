import '../styles/globals.scss'
import "react-toggle/style.css"
import Head from "../components/utils/Head";
import React from "react";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";

const Header = dynamic(
    () => import('../components/Header'),
    {ssr: false}
)


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head/>
            <div className="h-full flex flex-col container mx-auto">
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </div>
        </>
    )
}

export default MyApp

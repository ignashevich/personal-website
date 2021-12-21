import React from "react";
import Head from "../components/utils/Head";
import Home from "./home";
import Footer from "../components/Footer";

import dynamic from 'next/dynamic'

const Header = dynamic(
    () => import('../components/Header'),
    { ssr: false }
)


export default function Index() {
  return (
      <>
          <Head/>
          <div className="h-full flex flex-col">
              <Header/>
              <Home/>
              <Footer/>
          </div>
      </>
  )
}

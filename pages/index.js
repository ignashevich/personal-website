import React from "react";
import Head from "../components/utils/Head.js";
import Home from "./home";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";


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

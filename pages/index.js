import React from "react";
import Head from "../components/utils/Head";
import Home from "./home";
import Header from "../components/Header";
import Footer from "../components/Footer";


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

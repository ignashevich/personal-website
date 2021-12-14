import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from "react";
import Head from "../components/Head.client.js";
import Home from "./home.server";


export default function Index() {
  return (
      <>
          <Head/>
          <Home/>
      </>
  )
}

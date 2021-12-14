import React from 'react';
import NextHead from "next/head";

const Head = () => {
    return (
        <NextHead>
            <title>Aliaksandr Ihnashevich</title>
            <meta name="description" content="Aliaksandr Ihnashevich's personal website"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400&display=swap" rel="stylesheet"/>
        </NextHead>
    );
};

export default Head;

import React from 'react';
import NextHead from "next/head";

const Head = () => {
    return (
        <NextHead>
            <title>Aliaksandr Ihnashevich</title>
            <meta name="description" content="Aliaksandr Ihnashevich's personal website"/>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="icon" href="/logo.svg"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap" rel="stylesheet"/>
            <script dangerouslySetInnerHTML={{
                __html: `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`
            }}/>
        </NextHead>
    );
};

export default Head;

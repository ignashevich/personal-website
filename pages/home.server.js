import React from 'react';
import Image from 'next/image'

const Home = () => {
    return (
        <main className="grid h-full gap-3 place-content-center place-items-center px-8">
            <div className="mb-4 md:mb-8 w-6/12 md:w-fit">
                <Image width={240} height={220 } className="rounded-lg" src="/me.png" alt="Photo of me"/>
            </div>
            <h1 className="text-center text-4xl sm:text-6xl">Aliaksandr Ihnashevich</h1>
            <a className="text-xl sm:text-4xl hover:text-gray-700" href="mailto:al.ignashevich@gmail.com">al.ignashevich@gmail.com</a>
            <div className="sm:text-2xl flex space-x-2 sm:space-x-6">
                <a rel="noreferrer" target="_blank" className="hover:text-gray-700" href="https://docs.google.com/document/d/1S7TfClSn_sQU1VjOiVaRVpX4PXeWa00c6g0zGe39yRc/edit?usp=sharing">Resume</a>
                <a rel="noreferrer" target="_blank" className="hover:text-gray-700" href="tg://resolve?domain=al_ignashevich">Telegram</a>
                <a rel="noreferrer" target="_blank" className="hover:text-gray-700" href="https://github.com/ignashevich">Github</a>
                <a rel="noreferrer" target="_blank" className="hover:text-gray-700" href="https://www.linkedin.com/in/aliaksandr-ihnashevich-775540129/">Linkedin</a>
            </div>
        </main>
    );
};

export default Home;

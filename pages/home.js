import React from 'react';
import Image from 'next/image'

const Home = () => {
    return (
        <main className="grid gap-3 place-content-center place-items-center px-8 flex-1">
            <div className="mb-4 md:mb-8 w-6/12 md:w-fit">
                <Image width={240} height={220 } className="rounded-lg" src="/me.png" alt="Photo of me"/>
            </div>
            <h1 className="text-center text-4xl sm:text-6xl">Aliaksandr Ihnashevich</h1>
            <a className="text-xl sm:text-4xl" href="mailto:al.ignashevich@gmail.com">al.ignashevich@gmail.com</a>
            <div className="sm:text-2xl flex space-x-2 sm:space-x-6 mb-6 sm:mb-8">
                <a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="https://docs.google.com/document/d/1S7TfClSn_sQU1VjOiVaRVpX4PXeWa00c6g0zGe39yRc/edit?usp=sharing">Resume</a>
                <a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="tg://resolve?domain=al_ignashevich">Telegram</a>
                <a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="https://github.com/ignashevich">Github</a>
                <a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="https://www.linkedin.com/in/aliaksandr-ihnashevich-775540129/">Linkedin</a>
            </div>
            <div className="justify-self-start">
                <h2 className="text-xl sm:text-4xl mb-4 sm:mb-6">
                    My personal projects:
                </h2>
                <ul className="sm:text-2xl space-y-2">
                    <li>
                        - Tulips online shop (<a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="https://tulpan-mart.by">tulpan-mart.by</a>)
                    </li>
                    <li>
                        - Landing page for the game (<a rel="noreferrer" target="_blank" className="text-blue-500 hover:text-blue-400" href="https://catellite.space">catellite.com</a>)
                    </li>
                </ul>
            </div>

        </main>
    );
};

export default Home;

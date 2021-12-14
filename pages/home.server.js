import React from 'react';

const Home = () => {
    return (
        <main className="grid h-full gap-3 place-content-center place-items-center px-8">
            <button className="text-4xl sm:text-6xl">Aliaksandr Ihnashevich</button>
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

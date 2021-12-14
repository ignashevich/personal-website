import React from 'react';

const Home = () => {
    return (
        <main className="grid h-full gap-3 place-content-center place-items-center px-8">
            <button className="text-4xl sm:text-6xl">Aliaksandr Ihnashevich</button>
            <a className="text-xl sm:text-4xl hover:text-gray-700" href="mailto:al.ignashevich@gmail.com">al.ignashevich@gmail.com</a>
            <div className="sm:text-2xl flex space-x-6">
                <a className="hover:text-gray-700" href="tg://resolve?domain=al_ignashevich">Telegram</a>
                <a className="hover:text-gray-700" href="https://github.com/ignashevich">Github</a>
                <a className="hover:text-gray-700" href="https://www.linkedin.com/in/aliaksandr-ihnashevich-775540129/">Linkedin</a>
            </div>
        </main>
    );
};

export default Home;

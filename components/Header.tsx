import React, { useLayoutEffect } from 'react';
import Toggle from 'react-toggle';
import { DarkMode } from '../helpers/darkMode';
import { useValue } from '../helpers/useValue';
import Logo from './logo.svg';

const Header = () => {
    const isDarkModeEnabled = useValue(DarkMode.isEnabled);

    const onToggle = () => {
        isDarkModeEnabled.get() ? DarkMode.off() : DarkMode.on();
        isDarkModeEnabled.set(!isDarkModeEnabled.get());
    };

    return (
        <header className="flex items-start justify-between p-5">
            <Logo className="dark:fill-black dark:stroke-black dark:fill-white dark:stroke-white w-10 md:w-14"/>
            <Toggle
                className=" align-self-start scale-125 sm:scale-150 night-mode-toggle"
                icons={ {
                    checked: <div className="relative top-2/4 -left-1 ">🌚</div>,
                    unchecked: <div className="relative top-2/4  right-1/4">🌝</div>,
                } }
                checked={ isDarkModeEnabled.get() }
                onChange={ onToggle }/>
        </header>
    );
};

export default Header;

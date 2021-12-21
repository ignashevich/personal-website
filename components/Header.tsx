import React, { useLayoutEffect } from 'react';
import Toggle from 'react-toggle';
import { DarkMode } from '../helpers/darkMode';
import { useValue } from '../helpers/useValue';

const Header = () => {
    const isDarkModeEnabled = useValue(DarkMode.isEnabled());

    const onToggle = () => {
        isDarkModeEnabled.get() ? DarkMode.off() : DarkMode.on();
        isDarkModeEnabled.set(!isDarkModeEnabled.get());
    };

    return (
        <header className="grid p-5">
            <Toggle

                className="justify-self-end scale-125 sm:scale-150 night-mode-toggle"
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

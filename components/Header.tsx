import React, { useLayoutEffect } from 'react';
import Toggle from 'react-toggle';
import { DarkMode } from '../helpers/darkMode';
import { useValue } from '../helpers/useValue';

const Header = () => {
    const isDarkModeEnabled = useValue(false);

    const onToggle = () => {
        isDarkModeEnabled.get() ? DarkMode.off() : DarkMode.on();
        isDarkModeEnabled.set(!isDarkModeEnabled.get());
    };

    useLayoutEffect(() => {
        isDarkModeEnabled.set(DarkMode.isEnabled());
    }, []);

    return (
        <header className="grid p-5">
            <Toggle

                className="justify-self-end scale-125 sm:scale-150 night-mode-toggle"
                icons={ {
                    checked: <div className="relative top-1.5 sm:-left-1 sm:top-1">🌚</div>,
                    unchecked: <div className="relative top-1.5  sm:top-1 sm:right-1">🌝</div>,
                } }
                checked={ isDarkModeEnabled.get() }
                onChange={ onToggle }/>
        </header>
    );
};

export default Header;

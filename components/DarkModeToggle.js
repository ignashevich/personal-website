import React from 'react';
import {DarkMode} from "../helpers/darkMode";
import Toggle from 'react-toggle';


const DarkModeToggle = ({className, value}) => {

    const onToggle = () => {
        value.get() ? DarkMode.off() : DarkMode.on();
        value.set(!value.get());
    };

    return (
        <div className={className}>
            <Toggle
                className="align-self-start scale-150 night-mode-toggle"
                icons={ {
                    checked: <div className="relative top-2/4 dark-mode-icon -left-1 ">🌚</div>,
                    unchecked: <div className="relative top-2/4 dark-mode-icon right-1/4">🌝</div>,
                } }
                checked={ value.get() }
                onChange={ onToggle }/>
        </div>
    );
};

export default DarkModeToggle;

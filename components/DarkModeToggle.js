import React from 'react';
import {DarkMode} from "../helpers/darkMode";
import Toggle from 'react-switch';
import Moon from './moon.svg';
import Sun from './sun.svg';


const DarkModeToggle = ({className, value}) => {

    const onToggle = () => {
        value.get() ? DarkMode.off() : DarkMode.on();
        value.set(!value.get());
    };

    return (
        <div className={className}>
            <Toggle
                className="react-switch"
                onChange={onToggle}
                checked={value.get()}
                checkedIcon={<div className="text-3xl h-full grid place-content-center"><Moon className="w-9"/></div>}
                uncheckedIcon={<div className="text-3xl h-full grid place-content-center"><Sun className="w-9"/></div>}
                offColor="#000"
                onColor="#fff"
                offHandleColor="#fff"
                onHandleColor="#000"
                height={40}
                width={80}
                handleDiameter={29}
            />
        </div>
    );
};

export default DarkModeToggle;

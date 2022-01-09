import NextLink from 'next/link';
import React, { useCallback, useState } from 'react';
import { DarkMode } from '../helpers/darkMode';
import { useValue } from '../helpers/useValue';
import { useRouter } from 'next/router';
import cx from 'classnames';
import DarkModeToggle from '../components/DarkModeToggle';
import { Sling as Hamburger } from 'hamburger-react';


const Header = () => {
    const router = useRouter();
    const isDarkModeEnabled = useValue(DarkMode.isEnabled);
    const [isBurgerOpened, setIsBurgerOpened] = useState(false);

    const Link = useCallback(({ href, children }) => {
        const isActive = router.asPath === href;

        return (
            <NextLink href={ href }>
                <a onClick={ () => setIsBurgerOpened(false) } className={ cx('text-4xl', isActive && 'underline decoration-4 underline-offset-8') }>{ children }</a>
            </NextLink>
        );
    }, [router.asPath]);

    return (
        <header className="flex items-center justify-between px-8 py-8 sm:py-12">
            {/*<Logo className="dark:fill-black dark:stroke-black dark:fill-white dark:stroke-white w-10 md:w-14"/>*/ }
            <DarkModeToggle value={ isDarkModeEnabled } className="lg:hidden block"/>

            <nav className={ cx('lg:block', !isBurgerOpened && 'hidden', isBurgerOpened && 'absolute top-0 left-0 bg-white dark:bg-black w-screen h-screen z-10') }>
                <ul className={ cx('lg:flex container', !isBurgerOpened && 'space-x-8', isBurgerOpened && 'space-y-4 text-right mx-auto pr-8') }>
                    <li className="mt-28 lg:mt-0">
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/pet-projects">Pet Projects</Link>
                    </li>
                    <li>
                        <Link href="/real-projects">Real Projects</Link>
                    </li>
                </ul>
            </nav>

            <DarkModeToggle value={ isDarkModeEnabled } className="hidden lg:block"/>
            <button className="block lg:hidden z-20" onClick={ () => setIsBurgerOpened(v => !v) }>
                <Hamburger duration={0} size={ 42 } toggled={ isBurgerOpened }/>
            </button>
        </header>
    );
};

export default Header;

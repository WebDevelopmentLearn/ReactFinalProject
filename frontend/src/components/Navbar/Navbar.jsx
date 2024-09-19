import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss';
import {CartComponent} from "../CartComponent/CartComponent";
import {useEffect, useState} from "react";

export const Navbar = () => {

    // const [isMobile, setIsMobile] = useState(false);
    //
    // useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 768px)');
    //     setIsMobile(mediaQuery.matches);
    //     mediaQuery.addEventListener('change', () => {
    //         setIsMobile(mediaQuery.matches);
    //     });
    //
    // }, [isMobile]);

    return (
        <div className={styles.Navbar}>
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>


            <div className={styles.navbarCenterLinks}>
                <NavLink
                    to={"/"}
                    className={({isActive}) =>
                        isActive ? styles.active : null
                    }>Main Page
                </NavLink>

                <NavLink
                    to={"/categories"}
                    className={({isActive}) =>
                        isActive ? styles.active : null
                    }>Categories
                </NavLink>

                <NavLink
                    to={"/products"}
                    className={({isActive}) =>
                        isActive ? styles.active : null
                    }>All products
                </NavLink>

                <NavLink
                    to={"/sales"}
                    className={({isActive}) =>
                        isActive ? styles.active : null
                    }>All sales
                </NavLink>
            </div>

            <CartComponent/>


        </div>
    )
}
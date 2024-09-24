import logo from '../../assets/logo.svg';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.scss';
import {CartComponent} from "../CartComponent/CartComponent";
import {useState} from "react";

export const Navbar = () => {

    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div className={styles.Navbar}>
            <NavLink to="/">
                <img src={logo} alt="logo"/>
            </NavLink>

            <div onClick={handleOpen} className={`${styles.burgerBtn}`}>
                <div className={`${styles.bar} ${isOpened ? styles.change : ''}`}></div>
                <div className={`${styles.bar} ${isOpened ? styles.change : ''}`}></div>
                <div className={`${styles.bar} ${isOpened ? styles.change : ''}`}></div>
            </div>

            <div
                className={`${styles.navbarCenterLinks} ${isOpened ? styles.navbarCenterLinksOpen : styles.navbarCenterLinksClose}`}>
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

                <CartComponent className={`${styles.cartBtn} ${isOpened ? styles.cartBtnOpen : styles.cartBtnClose}`}/>
            </div>

            <CartComponent className={`${styles.cartBtn} ${isOpened ? styles.cartBtnClose : ""}`}/>

        </div>
    )
}
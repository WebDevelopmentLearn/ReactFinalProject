import styles from './CartComponent.module.scss';
import icon from '../../assets/cart_icon.svg';
import {Link, NavLink} from "react-router-dom";
export const CartComponent = () => {
    const count = 5;
    return (
        <NavLink to="">
            <div className={styles.iconWrapper}>
                <img src={icon} alt="cart_icon"/>
                {count > 0 && (
                    <div className={styles.badge}>
                        <span className={styles.badgeText}>{count}</span>
                    </div>
                )}
            </div>
        </NavLink>
    )
}
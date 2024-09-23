import styles from "./OrderDetails.module.scss";
import {useEffect} from "react";

export const OrderDetails = ({productsLength, price}) => {



    return (
        <div className={styles.CartOrderContainer}>
            <h2 className={styles.CartOrderTitle}>Order details</h2>
            <p className={styles.CartProductsCountPar}>{productsLength} items</p>
            <div className={styles.CartOrderPriceContainer}>
                <p className={styles.CartProductsTotalPar}>Total</p>
                <p className={styles.CartProductsPricePar}>${price}</p>
            </div>
            <form className={styles.CartOrderForm} action="">
                <input type="text" placeholder="Name"/>
                <input type="tel" placeholder="Phone number"/>
                <input type="email" placeholder="Email"/>
                <button className={styles.CartOrderBtn} type="submit">Order</button>
            </form>
        </div>
    )
}
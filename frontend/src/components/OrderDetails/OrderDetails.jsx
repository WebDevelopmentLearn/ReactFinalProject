import styles from "./OrderDetails.module.scss";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {sendOrder} from "../../store/reducers/actionCreators";
import {DiscountAndOrderForm} from "../DiscountAndOrderForm/DiscountAndOrderForm";

export const OrderDetails = ({products, productsLength, price}) => {

 const dispatch = useDispatch();
    const submitOrder = (data) => {
        console.log(data);
        const orderData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            products: products.map(product => {
                return {
                    id: product.id,
                    quantity: product.quantity
                }
            })
        }
        dispatch(sendOrder(orderData));
    }

    // const orderData = {
    //     name: "John Doe",
    //     phone: "1234567890",
    //     email: "johndoe@example.com",
    //     products: [
    //         {
    //             id: 1,
    //             quantity: 2
    //         },
    //         {
    //             id: 2,
    //             quantity: 1
    //         }
    //     ]
    // };

    return (
        <div className={styles.CartOrderContainer}>
            <h2 className={styles.CartOrderTitle}>Order details</h2>
            <p className={styles.CartProductsCountPar}>{productsLength} items</p>
            <div className={styles.CartOrderPriceContainer}>
                <p className={styles.CartProductsTotalPar}>Total</p>
                <p className={styles.CartProductsPricePar}>${price}</p>
            </div>
            <DiscountAndOrderForm submitForm={submitOrder} title={"Order"} formClass={`${styles.CartOrderForm}`} buttonClass={styles.CartOrderBtn} />
        </div>
    )
}
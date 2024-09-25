import styles from "./OrderDetails.module.scss";
import {useContext, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendOrder} from "../../store/reducers/actionCreators";
import {DiscountAndOrderForm} from "../DiscountAndOrderForm/DiscountAndOrderForm";
import {NotificationContext} from "../../context/NotificationContext";
import STATUS from "../../utils/Utils";
import {ModalContext} from "../../context/ModalContext";
import {clearCart} from "../../store/reducers/cartSlice";
import {clearStatus} from "../../store/reducers/orderSlice";

export const OrderDetails = ({products, productsLength, price}) => {
    const { addNotification } = useContext(NotificationContext);
    const {addModal} = useContext(ModalContext);
    const {status: orderStatus, orderError} = useSelector(state => state.orderReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        if (orderStatus === STATUS.SUCCESS) {
            addModal(
                {
                    title: "Congratulations!",
                    content: {
                        par1: "Your order has been successfully placed on the website.",
                        par2: "A manager will contact you shortly to confirm your order."
                    },
                    onClose: () => {
                        dispatch(clearCart());
                        dispatch(clearStatus());
                    }
                });

        } else if (orderStatus === STATUS.FAILED && orderError) {
            addNotification(orderError, "error");
        }

    }, [orderStatus]);

    const submitOrder = (data) => {
        const sentProducts = products.map(product => {
            return {
                id: product.id,
                quantity: product.quantity
            }
        });
        const orderData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            products: sentProducts
        }
        dispatch(sendOrder(orderData));

    }

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

import styles from "./AddToCartBtn.module.scss";
import {addProductToCart} from "../../store/reducers/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import STATUS from "../../utils/Utils";
import {useContext} from "react";
import {NotificationContext} from "../../context/NotificationContext";

export const AddToCartBtn = ({isDisabled, onClick, title = "Add to cart", product, className}) => {

    const dispatch = useDispatch();
    const {status} = useSelector(state => state.cartReducer);

    return (
        <button disabled={isDisabled} onClick={(event) => onClick(event, product) } className={`${className} ${styles.AddToCartBtn}`}>
            {title}
        </button>
    )
}
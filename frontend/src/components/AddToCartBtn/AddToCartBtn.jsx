
import styles from "./AddToCartBtn.module.scss";
import {addProductToCart} from "../../store/reducers/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import STATUS from "../../utils/Utils";
import {useContext} from "react";
import {NotificationContext} from "../../context/NotificationContext";

export const AddToCartBtn = ({product, className}) => {
    const { addNotification } = useContext(NotificationContext);
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.cartReducer);
    const handleClick = (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        event.preventDefault();  // Останавливаем переход по ссылке
        const productForCart = {...product};
        console.log("[WIP] Add to cart button clicked", productForCart);
        if (!("quantity" in productForCart)) {
            productForCart.quantity = 1;
        }
        dispatch(addProductToCart(productForCart));
        addNotification("Product has been successfully added to cart", "success");
    }

    //position: absolute;
    //top: 224px;
    //left: 50%;
    //transform: translateX(-50%);
    //
    //opacity: 0; /* Изначально скрыта */
    //visibility: hidden;

    return (
        <button onClick={(event) => handleClick(event, product)} className={`${className} ${styles.AddToCartBtn}`}>
            Add to cart
        </button>
    )
}
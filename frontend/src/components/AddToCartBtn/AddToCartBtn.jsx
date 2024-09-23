
import styles from "./AddToCartBtn.module.scss";
import {addProductToCart} from "../../store/reducers/cartSlice";
import {useDispatch} from "react-redux";

export const AddToCartBtn = ({product, className}) => {
    const dispatch = useDispatch();
    const handleClick = (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        event.preventDefault();  // Останавливаем переход по ссылке
        console.log("[WIP] Add to cart button clicked", product);
        dispatch(addProductToCart(product));

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
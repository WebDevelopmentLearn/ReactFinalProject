
import styles from './CartProductCard.module.scss';
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../../store/reducers/cartSlice";
import {useDispatch} from "react-redux";
import x_icon from '../../assets/x_icon.svg';
import {Link} from "react-router-dom";
export const CartProductCard = ({productInd, productCard}) => {
    const amount = productCard?.quantity;

    const product = {...productCard};
    const priceWithDiscount = product.discont_price ? product.discont_price * amount : product.price * amount;
    const priceWithoutDiscount = product.price * amount;

    const dispatch = useDispatch();

    const incrementQuantity = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(increaseQuantity(productInd));
    };

    const decrementQuantity = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(decreaseQuantity(productInd));
    };

    const handleRemove = (id, event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(removeProductFromCart(id));
    }


    return (
        <Link to={`/products/${product?.id}`} className={styles.CartProductCard}>
            <img className={styles.CartProductImg} src={`${BACKEND_URL}/${product.image}`} alt=""/>
            <div className={styles.CartProductCardInfoContainer}>
                <div className={styles.CartProductTitleAndBtn}>
                    <h3 className={styles.CartProductTitle}>{product.title}</h3>
                    <button className={styles.CartProductRemoveBtn} onClick={(event) => handleRemove(productInd, event)}>
                        <svg className={styles.removeBtnIcon} width="30" height="30" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M18 6L6 18" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fill="currentColor" d="M6 6L18 18" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.QuantityAndPrice}>
                    <div className={styles.QuantityContainer}>
                        <button className={styles.QuantityBtn} onClick={decrementQuantity}>-</button>
                        <div className={styles.Quantity}>
                            <span>{amount}</span>
                        </div>
                        <button className={styles.QuantityBtn} onClick={incrementQuantity}>+</button>

                    </div>
                    <div className={styles.CartProductPriceContainer}>
                        <h3 className={styles.CartProductDiscountPrice}>${priceWithDiscount}</h3>
                        {product.discont_price && <p className={styles.CartProductPrice}>${priceWithoutDiscount}</p>}
                    </div>
                </div>
            </div>
        </Link>
    )
}
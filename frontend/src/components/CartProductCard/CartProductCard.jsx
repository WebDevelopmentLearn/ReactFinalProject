
import styles from './CartProductCard.module.scss';
import {useState} from "react";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {removeProductFromCart} from "../../store/reducers/cartSlice";
import {useDispatch} from "react-redux";
import x_icon from '../../assets/x_icon.svg';
export const CartProductCard = ({productInd, productCard}) => {

    const [quantity, setQuantity] = useState(1);
    const product = {...productCard};
    const price = product.discont_price * quantity;
    const priceWithoutDiscount = product.price * quantity;

    const dispatch = useDispatch();

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);

    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    const handleRemove = (id) => {
        dispatch(removeProductFromCart(id));
        console.log('Remove', id);
    }

    return (
        <div className={styles.CartProductCard}>
            <img className={styles.CartProductImg} src={`${BACKEND_URL}/${product.image}`} alt=""/>
            <div className={styles.CartProductCardInfoContainer}>
                <div className={styles.CartProductTitleAndBtn}>
                    <h3 className={styles.CartProductTitle}>{product.title}</h3>
                    <button className={styles.CartProductRemoveBtn} onClick={() => handleRemove(productInd)}>
                        <img src={x_icon} alt="Remove product"/>
                    </button>
                </div>
                <div className={styles.QuantityAndPrice}>
                    <div className={styles.QuantityContainer}>
                        <button className={styles.QuantityBtn} onClick={decrementQuantity}>-</button>
                        <div className={styles.Quantity}>
                            <span>{quantity}</span>
                        </div>
                        <button className={styles.QuantityBtn} onClick={incrementQuantity}>+</button>

                    </div>
                    <div className={styles.CartProductPriceContainer}>
                        <h3 className={styles.CartProductDiscountPrice}>${price}</h3>
                        <p className={styles.CartProductPrice}>${priceWithoutDiscount}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
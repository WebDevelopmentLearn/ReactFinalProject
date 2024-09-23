
import styles from './CartProductCard.module.scss';
import {useState} from "react";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {decreaseQuantity, increaseQuantity, removeProductFromCart} from "../../store/reducers/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import x_icon from '../../assets/x_icon.svg';
export const CartProductCard = ({productInd, productCard}) => {

    const [quantity, setQuantity] = useState(productCard.quantity || 1);

    // Используем useSelector, чтобы получить доступ к товарам в корзине
    const cartProducts = useSelector(state => state.cartReducer.cartProducts);

    // Находим продукт по его индексу
    const productInCart = cartProducts.find((item, index) => index === productInd);

    // Проверяем, если продукт найден, устанавливаем количество из корзины
    const amount = productInCart ? productInCart.quantity : quantity;

    const product = {...productCard};
    const priceWithDiscount = product.discont_price ? product.discont_price * amount : product.price * amount;
    const priceWithoutDiscount = product.price * amount;

    const dispatch = useDispatch();

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
        dispatch(increaseQuantity(productInd));  // Передаем индекс продукта для увеличения количества
        console.log("Increment Amount", amount); // Выводим количество после увеличения
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
            dispatch(decreaseQuantity(productInd));  // Передаем индекс продукта для уменьшения количества
            console.log("Decrement Amount", amount); // Выводим количество после уменьшения
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
                        <h3 className={styles.CartProductDiscountPrice}>${priceWithDiscount}</h3>
                        {product.discont_price && <p className={styles.CartProductPrice}>${priceWithoutDiscount}</p>}
                    </div>
                </div>
            </div>


        </div>
    )
}
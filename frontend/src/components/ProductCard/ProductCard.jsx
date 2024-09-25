
import styles from './ProductCard.module.scss';
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../store/reducers/cartSlice";
import STATUS from "../../utils/Utils";
import {AddToCartBtn} from "../AddToCartBtn/AddToCartBtn";
import {NotificationContext} from "../../context/NotificationContext";

/**
 * Product card component
 * @param data - product data
 * @param addCartBtn - true if add to cart button should be displayed
 * @returns {JSX.Element}
 * @constructor
 */
export const ProductCard = ({isDiscountPrice = false, productData, addCartBtn = false}) => {
    const { addNotification } = useContext(NotificationContext);
    const dispatch = useDispatch();
    const {status} = useSelector(state => state.cartReducer);

    const handleClick = (event, product) => {
        event.stopPropagation();
        event.preventDefault();
        const productForCart = {...product};
        if (!("quantity" in productForCart)) {
            productForCart.quantity = 1;
        }
        dispatch(addProductToCart(productForCart));
        addNotification("Product has been successfully added to cart", "success");
    }

    return (
        <Link key={productData?.id} to={
            `${isDiscountPrice ? 
                `/sales/${productData.id}` : 
                `/products/${productData?.id}`
            
            }`} className={styles.ProductCard}>
            <img
                className={styles.ProductImage}
                src={`${BACKEND_URL}/${productData?.image}`}
                alt={productData?.title}
                loading="lazy"
            />
            {addCartBtn &&
                <AddToCartBtn isDisabled={productData?.isInCart} onClick={handleClick}  title={productData?.isInCart ? "Added to cart" : "Add to cart"} className={styles.HiddenBtn}  product={productData} />
            }

            <div className={styles.ProductInfo}>
                <h4 className={styles.ProductTitle}>{productData?.title}</h4>
                <div className={styles.ProductPriceInfo}>
                    <p className={styles.ProductDPrice}>${productData?.discont_price ? productData?.discont_price : productData?.price}</p>
                    {productData?.discont_price && <p className={styles.ProductPrice}>${productData?.price}</p>}
                    {productData?.discont_price &&
                        <p className={styles.ProductDiscount}>
                            -{Math.round(((productData?.price - productData?.discont_price) * 100) / productData?.price)}%
                        </p>
                    }
                </div>
            </div>
        </Link>
    )
};
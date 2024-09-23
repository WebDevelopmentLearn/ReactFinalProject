
import styles from './ProductCard.module.scss';
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {Link} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProductToCart} from "../../store/reducers/cartSlice";
import STATUS from "../../utils/Utils";
import {AddToCartBtn} from "../AddToCartBtn/AddToCartBtn";


/**
 * Product card component
 * @param data - product data
 * @param addCartBtn - true if add to cart button should be displayed
 * @returns {JSX.Element}
 * @constructor
 */
export const ProductCard = ({isDiscountPrice = false, data, addCartBtn = false}) => {

    const dispatch = useDispatch();
    const {status} = useSelector(state => state.cartReducer);

    // "/categories/"
    return (
        <Link key={data.id} to={`${isDiscountPrice ? `/sales/${data.id}` : `/products/${data.id}`}`} className={styles.ProductCard}>
            <img
                className={styles.ProductImage}
                src={`${BACKEND_URL}/${data.image}`}
                alt={data.title}
                loading="lazy"
            />
            {addCartBtn &&
                // <button onClick={(event) => handleClick(event)} className={styles.AddToCartBtn}>
                //     Add to cart
                // </button>
                <AddToCartBtn className={styles.HiddenBtn}  product={data} />
            }

            <div className={styles.ProductInfo}>
                <h4 className={styles.ProductTitle}>{data.title}</h4>
                <div className={styles.ProductPriceInfo}>
                    <p className={styles.ProductDPrice}>${data.discont_price ? data.discont_price : data.price}</p>
                    {data.discont_price && <p className={styles.ProductPrice}>${data.price}</p>}
                    {data.discont_price &&
                        <p className={styles.ProductDiscount}>
                            -{Math.round(((data.price - data.discont_price) * 100) / data.price)}%
                        </p>
                    }
                </div>
            </div>
        </Link>
    )
}
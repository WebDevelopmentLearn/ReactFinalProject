import {Layout} from "../../layouts/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {useParams} from "react-router-dom";
import {AddToCartBtn, Loader} from "../../components";
import STATUS from "../../utils/Utils";
import styles from "./Product.module.scss";
import {selectProductById} from "../../store/selectors";
import {addProductToCart} from "../../store/reducers/cartSlice";
import {NotificationContext} from "../../context/NotificationContext";

export const Product = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const {status, error } = useSelector(state => state.productsReducer);
    const productFromStore = useSelector((state) => selectProductById(state, productId));
    const [product, setProduct] = useState(null);
    const isInCart = Boolean(productFromStore?.quantity);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
       if (productFromStore) {
           setProduct(isInCart ? productFromStore : {...productFromStore, quantity: 1})
       }
    }, [productFromStore]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const incrementQuantity = () => {
        setProduct({...product, quantity: product.quantity + 1})
    }


    const decrementQuantity = () => {
        if (product?.quantity > 1) {
            setProduct({...product, quantity: product.quantity - 1})
        }
    }

    const handleClick = (_, product) => {
        dispatch(addProductToCart(product));
        addNotification("Product has been successfully added to cart", "success");
    }

    return (
        <Layout>

            <div className={styles.ProductFullBlock}>
                {status === STATUS.LOADING ? (
                    <Loader />
                ) : (
                    product && (
                        <div className={styles.ProductFull}>
                            <img className={styles.ProductImg} src={`${BACKEND_URL}/${product.image}`} alt={product?.title}/>
                            <div className={styles.ProductFullInfoContainer}>
                                <h2>{product?.title}</h2>
                                <div className={styles.ProductFullPriceInfo}>
                                    <p className={styles.ProductDPrice}>${product.discont_price ? product.discont_price : product.price}</p>
                                    {product.discont_price &&
                                        <p className={styles.ProductPrice}>${product.price}</p>}
                                    {product.discont_price &&
                                        <p className={styles.ProductDiscount}>
                                            -{Math.round(((product.price - product.discont_price) * 100) / product.price)}%
                                        </p>
                                    }
                                </div>
                                <div className={styles.ProductFullControlPanel}>
                                    <div className={styles.QuantityContainer}>
                                        <button className={styles.QuantityBtn} onClick={decrementQuantity} >-</button>
                                        <div className={styles.Quantity}>
                                            <span>{product.quantity}</span>
                                        </div>
                                        <button className={styles.QuantityBtn} onClick={incrementQuantity} >+</button>

                                    </div>
                                    <AddToCartBtn onClick={handleClick} title={isInCart ? "Change quantity" : "Add to cart"} product={product} />
                                </div>
                                <div className={styles.ProductFullDescContainer}>
                                    <h4 className={styles.ProductFullDescHeader}>Description</h4>
                                    <div className={styles.ProductFullDescOverflowContainer}>
                                        {/*<p className={styles.ProductFullDescPar}>{product[0]?.description}</p>*/}
                                        <p className={styles.ProductFullDescPar}>Versatile selection: discover the culinary world for your little four-legged friend with 2 types of dry food and 6 types of wet food. So there is something for every taste. High acceptance: our balanced formula is rich in essential nutrients, vitamins and minerals and is tailored to the needs of small dog breeds. An all-round supply that leaves nothing to be desired. Dry food: Finest GF Lamb - easily digestible and a croquette coated with instant sauce for extra taste. Finest Croc - rich in meat and with grape seed flour. Wet food: you will receive a selection of different types of wet food from our range: single protein chicken, single protein buffalo, duck with rice and cranberries, rabbit with millet and sweet potato, lamb with rice and tomatoes and chicken/duck with millet and potatoes. Made in Germany: Our feed is manufactured under the strictest quality standards in Germany and contains no artificial additives. All meat products used come from food-safe animals.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </Layout>
    );
};
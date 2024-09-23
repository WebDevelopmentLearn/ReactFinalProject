import {Layout} from "../../layouts/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {BACKEND_URL, getProductById} from "../../store/reducers/actionCreators";
import {useParams} from "react-router-dom";
import {AddToCartBtn, Breadcrumbs, Loader} from "../../components";
import STATUS from "../../utils/Utils";
import styles from "./Product.module.scss";
import {useBreadcrumbs} from "../../utils/CustomHooks";
export const Product = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const { product, status, error } = useSelector(state => state.productsReducer);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        if (productId) {
            dispatch(getProductById(Number(productId)));
        }
    }, [dispatch, productId]);

    useEffect(() => {
        if (status === "SUCCESS") {
            console.log("Product loaded:", product);
        }
    }, [product, status]);

    // useEffect(() => {

    // if (status === STATUS.SUCCESS && productId) {
    //     console.log(product[0].image);
    // }

    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }
    useBreadcrumbs();
    return (
        <Layout>

            <div className={styles.ProductFullBlock}>
                {status === STATUS.LOADING ? (
                    <Loader />
                ) : (
                    product.length && (
                        <div className={styles.ProductFull}>
                            <img className={styles.ProductImg} src={`${BACKEND_URL}/${product[0].image}`} alt={product[0]?.title}/>
                            <div className={styles.ProductFullInfoContainer}>
                                <h2>{product[0]?.title}</h2>
                                <div className={styles.ProductFullPriceInfo}>
                                    <p className={styles.ProductDPrice}>${product[0].discont_price ? product[0].discont_price : product[0].price}</p>
                                    {product[0].discont_price &&
                                        <p className={styles.ProductPrice}>${product[0].price}</p>}
                                    {product[0].discont_price &&
                                        <p className={styles.ProductDiscount}>
                                            -{Math.round(((product[0].price - product[0].discont_price) * 100) / product[0].price)}%
                                        </p>
                                    }
                                </div>
                                <div className={styles.ProductFullControlPanel}>
                                    <div className={styles.QuantityContainer}>
                                        <button className={styles.QuantityBtn} onClick={decrementQuantity}>-</button>
                                        <div className={styles.Quantity}>
                                            <span>{quantity}</span>
                                        </div>
                                        <button className={styles.QuantityBtn} onClick={incrementQuantity}>+</button>

                                    </div>
                                    <AddToCartBtn product={product[0]} />
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
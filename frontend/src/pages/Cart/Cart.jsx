
import styles from "./Cart.module.scss";
import {Layout} from "../../layouts/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProductsFromCart, removeProductFromCart} from "../../store/reducers/cartSlice";
import STATUS from "../../utils/Utils";
import {CartProductCard, Loader, OrderDetails, SectionSeparator} from "../../components";
import {useNavigate} from "react-router-dom";

export const Cart = () => {
    const navigate = useNavigate();
    const {cartProducts, error, status} = useSelector(state => state.cartReducer);
    //const {cartProducts} = localStorage.getItem('cartProducts') ? JSON.parse(localStorage.getItem('cartProducts')) : useSelector(state => state.cartReducer.products);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(0);

    useEffect(() => {
        // cartProducts.reduce((acc, product) => {
        //     return acc + (product.discont_price ? product.discont_price : product.price);
        // }, 0);

        //Посчитать общую стоимость товаров в корзине с учетом количества
        const newPrice = cartProducts.reduce((acc, product) => {
            let quantity = 1;
            if ("quantity" in product) {
                quantity = product.quantity;
            }
            return acc + (product.discont_price ? product.discont_price : product.price) * quantity;
        }, 0);

        setPrice(newPrice);
        console.log("New price", price);
    }, [cartProducts]);

    // useEffect(() => {
    //
    // }, [cartProducts]);

    useEffect(() => {

    }, [price]);

    const handleClick = () => {
        navigate('/products');
    }

    return (
        <Layout>
            <div className={styles.Cart}>
                {/*<h1 className={styles.CartHeader}>Shopping cart</h1>*/}
                <SectionSeparator sectionName="Shopping cart" path="/products" fullSectionName="Back to store" />
                {status === STATUS.LOADING ? <Loader /> : (
                    <div>
                        {cartProducts?.length ? (
                            <div className={styles.CartContainer}>
                                <div className={styles.CartProducts}>
                                    {cartProducts?.length ? cartProducts?.map(product => (
                                        <CartProductCard key={product.id} productInd={product.id}
                                                         productCard={product}/>
                                    )) : <h2>No products in cart</h2>}
                                </div>
                               <OrderDetails products={cartProducts} productsLength={cartProducts?.length} price={price} />
                            </div>
                        ) : (
                                <div>
                                    <h2 className={styles.NoProducts}>Looks like you have no items in your basket currently.</h2>
                                    <button className={styles.ContinueShoppingBtn} onClick={handleClick}>Continue Shopping</button>
                                </div>
                            )}
                    </div>
                )}
            </div>
        </Layout>
    )
}
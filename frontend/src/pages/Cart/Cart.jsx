
import styles from "./Cart.module.scss";
import {Layout} from "../../layouts/Layout/Layout";
import {useSelector} from "react-redux";
import STATUS from "../../utils/Utils";
import {CartProductCard, Loader, OrderDetails, SectionSeparator} from "../../components";
import {useNavigate} from "react-router-dom";
import {calculateSum} from "../../store/selectors";

export const Cart = () => {
    const navigate = useNavigate();
    const {cartProducts, error, status} = useSelector(state => state.cartReducer);

    const price = useSelector(calculateSum);

    const handleClick = () => {
        navigate('/products');
    }

    return (
        <Layout>
            <div className={styles.Cart}>
                <SectionSeparator sectionName="Shopping cart" path="/products" fullSectionName="Back to store" />
                {status === STATUS.LOADING ? <Loader /> : (
                    <div>
                        {cartProducts?.length ? (
                            <div className={styles.CartContainer}>
                                <div className={styles.CartProducts}>
                                    {cartProducts?.length ? cartProducts?.map(product => (
                                        <CartProductCard key={product.id} productInd={product.id} productCard={product}/>
                                    )) : <h2>No products in cart</h2>}
                                </div>
                               <OrderDetails products={cartProducts} productsLength={cartProducts?.length} price={price} />
                            </div>
                        ) : (
                                <div>
                                    <h2>Looks like you have no items in your basket currently.</h2>
                                    <button className={styles.ContinueShoppingBtn} onClick={handleClick}>Continue Shopping</button>
                                </div>
                            )}
                    </div>
                )}
            </div>
        </Layout>
    )
}
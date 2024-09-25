
import styles from "./Sales.module.scss";
import {Layout} from "../../layouts/Layout/Layout";
import {Loader, ProductCard, SortControlPanel} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import STATUS from "../../utils/Utils";

import {filteredProducts} from "../../store/selectors";
import {toggleDiscount} from "../../store/reducers/filterSlice";

export const Sales = () => {

    const {status, error} = useSelector(state => state.productsReducer);
    const products = useSelector(filteredProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getAllProducts());
        dispatch(toggleDiscount(true));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    console.log("Sales");
    return (
        <Layout>
            <div className={styles.Sales}>
                {status === STATUS.LOADING ? <Loader/> : (
                    <div>
                        <h1 className={styles.SalesHeader}>All Sales</h1>
                        <SortControlPanel setSortedBy={null} showDiscountCheckbox={false}/>
                        <div className={styles.SalesProductsContainer}>
                            {products?.length ? products?.map((product) => (
                                <ProductCard isDiscountPrice={true} key={product.id} productData={product} addCartBtn={true}/>
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
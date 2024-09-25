import {SectionSeparator} from "../SectionSeparator/SectionSeparator";

import styles from './SalesComponent.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {Loader} from "../Loader/Loader";
import {ProductCard} from "../ProductCard/ProductCard";
import STATUS from "../../utils/Utils";
import {useContext, useEffect, useMemo} from "react";
import {NotificationContext} from "../../context/NotificationContext";
import {filteredProducts} from "../../store/selectors";
import {toggleDiscount} from "../../store/reducers/filterSlice";

export const SalesComponent = () => {
    const {status, error} = useSelector(state => state.productsReducer);
    const products = useSelector(filteredProducts);

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(getAllProducts());
        dispatch(toggleDiscount(true));
    }, []);

    const randomProducts = useMemo(() => {
        return products.slice().filter(product => product.discont_price).sort(() => Math.random() - 0.5).slice(0, 4);
    }, [products]);


    const {addNotification} = useContext(NotificationContext);
    useEffect(() => {
        if (error) {
            addNotification(error, "error");
        }
    }, []);

    return (
        <section className={styles.SalesComponent}>
            <SectionSeparator sectionName="Sale" path="/sales/all" fullSectionName="All sales"/>
            <div className={styles.SaleProductsContainer}>
                {status === STATUS.LOADING ? <Loader/> : (
                    randomProducts.length ? randomProducts.map((product) => (
                            <ProductCard isDiscountPrice={true} key={product.id} productData={product} addCartBtn={true}/>
                        )
                    ) : <h2 className={styles.NoProducts}>No products</h2>
                )}
            </div>
        </section>
    )
}
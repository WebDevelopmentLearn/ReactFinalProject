import {Layout} from "../../layouts/Layout/Layout";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {getCategoryById} from "../../store/reducers/actionCreators";
import { Loader, ProductCard, SortControlPanel} from "../../components";
import styles from './Category.module.scss';
import STATUS from "../../utils/Utils";

import {currentCategory, selectProductsFromCategory} from "../../store/selectors";
import {NotificationContext} from "../../context/NotificationContext";

export const Category = () => {
    const {categoryId} = useParams();
    const {status, error} = useSelector(state => state.categoriesReducer);
    const categoryProducts = useSelector(selectProductsFromCategory);
    const category = useSelector(currentCategory);
    const dispatch = useDispatch();
    const {addNotification} = useContext(NotificationContext);
    useEffect(() => {
        dispatch(getCategoryById(Number(categoryId)));
        if (error) {
            addNotification(error, "error");
        }
    }, []);

    // console.log(error);


    return (
        <Layout>
            <div className={styles.Category}>

                {status === STATUS.LOADING ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>{category?.category?.title}</h1>

                        <SortControlPanel />

                        <div className={styles.CategoryProductsContainer}>
                            {categoryProducts?.length ? categoryProducts?.map((product) => (
                                <ProductCard  key={product.id} productData={product} addCartBtn={true} />
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
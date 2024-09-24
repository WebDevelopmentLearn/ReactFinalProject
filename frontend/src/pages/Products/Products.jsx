import {Layout} from "../../layouts/Layout/Layout";
import styles from "../Category/Category.module.scss";
import {Loader, ProductCard, SortControlPanel} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import STATUS from "../../utils/Utils";
import {useBreadcrumbs} from "../../utils/CustomHooks";
import {filteredProducts} from "../../store/selectors";



export const Products = () => {
    const {status, error} = useSelector(state => state.productsReducer);
    const products = useSelector(filteredProducts);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getAllProducts());
    // }, []);


    useBreadcrumbs();
    return (
        <Layout>
            <div className={styles.Category}>
                {status === STATUS.LOADING ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>All products</h1>
                        <SortControlPanel />
                        <div className={styles.CategoryProductsContainer}>
                            {products?.length ? products?.map((product) => (
                                <ProductCard key={product.id} productData={product} addCartBtn={true} />
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    )
}
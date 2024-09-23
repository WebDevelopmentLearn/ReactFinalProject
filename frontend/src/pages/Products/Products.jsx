import {Layout} from "../../layouts/Layout/Layout";
import styles from "../Category/Category.module.scss";
import {Breadcrumbs, Loader, ProductCard, SortControlPanel} from "../../components";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllProducts, getCategoryById} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {useBreadcrumbs} from "../../utils/CustomHooks";
import {filteredProducts} from "../../store/selectors";



export const Products = () => {
    const {categoryId} = useParams();

    const {status, error} = useSelector(state => state.productsReducer);
    const productsS = useSelector(filteredProducts);
    const [sortedBy, setSortedBy] = useState('default');
    // const [products, setProducts] = useState([]);

    // const {category} = categories.slice().filter(category => category.id === Number(categoryId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());

    }, []);


    useBreadcrumbs();
    return (
        <Layout>
            <div className={styles.Category}>

                {status === STATUS.LOADING ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>All products</h1>
                        <SortControlPanel  />

                        <div className={styles.CategoryProductsContainer}>
                            {productsS?.length ? productsS?.map((product) => (
                                <ProductCard key={product.id} data={product} addCartBtn={true} />
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
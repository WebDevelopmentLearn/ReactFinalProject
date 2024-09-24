import {Layout} from "../../layouts/Layout/Layout";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategoryById} from "../../store/reducers/actionCreators";
import {Breadcrumbs, CustomSelect, Loader, ProductCard, SortControlPanel} from "../../components";
import styles from './Category.module.scss';
import {status} from "../../utils/Utils";
import {useBreadcrumbs} from "../../utils/CustomHooks";



export const Category = () => {

    const {categoryId} = useParams();
    console.log(categoryId);

    const {currentCategory, status, error} = useSelector(state => state.categoriesReducer);

    const [sortedBy, setSortedBy] = useState('default');
    const [products, setProducts] = useState([]);

    // const {category} = categories.slice().filter(category => category.id === Number(categoryId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryById(Number(categoryId)));
        console.log(currentCategory?.data);

    }, [sortedBy]);


    useBreadcrumbs();

    return (
        <Layout>
            <div className={styles.Category}>

                {status === status.LOADING ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>{currentCategory?.category?.title}</h1>

                        <SortControlPanel />

                        <div className={styles.CategoryProductsContainer}>
                            {currentCategory?.data?.length ? currentCategory?.data?.map((product) => (
                                <ProductCard key={product.id} productData={product} addCartBtn={true} />
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
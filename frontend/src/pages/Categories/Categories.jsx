import {Layout} from "../../layouts/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {BACKEND_URL, getAllCategories} from "../../store/reducers/actionCreators";
import styles from './Categories.module.scss';
import {Breadcrumbs, Loader} from "../../components";
import {Link} from "react-router-dom";
import STATUS from "../../utils/Utils";

export const Categories = () => {

    const {categories, status, error} = useSelector(state => state.categoriesReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    return (
        <Layout>
            <div className={styles.Categories}>
                <Breadcrumbs/>
                <h1 className={styles.CategoriesHeader}>Categories</h1>
                <div className={styles.CategoriesContainer}>
                    {status === STATUS.LOADING ? <Loader/> : (
                        (categories && categories.length) ? categories.map((category) => (
                            <Link key={category.id} to={`/categories/${category.id}`} className={styles.Category}>
                                <img
                                    className={styles.CategoryImage}
                                    src={`${BACKEND_URL}/${category.image}`}
                                    alt={category.title}
                                    loading="lazy"
                                />
                                <h4 className={styles.CategoryName}>{category.title}</h4>
                            </Link>
                        )) : <h2 className={styles.NoCategories}>No categories</h2>
                    )}
                </div>
            </div>
        </Layout>
    )
}
import {Layout} from "../../layouts/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import styles from './Categories.module.scss';
import {Loader} from "../../components";
import {Link} from "react-router-dom";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";


export const Categories = () => {

    const {categories, status, error} = useSelector(state => state.categoriesReducer);
    const {addNotification} = useContext(NotificationContext);
    useEffect(() => {
        if (error) {
            addNotification(error, "error");
        }
    }, []);

    return (
        <Layout>
            <div className={styles.Categories}>

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
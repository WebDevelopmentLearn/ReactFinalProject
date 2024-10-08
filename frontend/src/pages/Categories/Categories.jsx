import {Layout} from "../../layouts/Layout/Layout";
import {useSelector} from "react-redux";
import {useContext, useEffect} from "react";
import styles from './Categories.module.scss';
import {CategoryCard, Loader} from "../../components";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";


export const Categories = () => {

    const {categories, status, error} = useSelector(state => state.categoriesReducer);
    const {addNotification} = useContext(NotificationContext);

    useEffect(() => {
        if (error) {
            addNotification("An error occurred while retrieving categories", "error");
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div className={styles.Categories}>
                <h1 className={styles.CategoriesHeader}>Categories</h1>
                <div className={styles.CategoriesContainer}>
                    {status === STATUS.LOADING ? <Loader/> : (
                        (categories && categories.length) ? categories.map((category) => (
                           <CategoryCard key={category.id} category={category} />
                        )) : <h2 className={styles.NoCategories}>No categories</h2>
                    )}
                </div>
            </div>
        </Layout>
    )
}
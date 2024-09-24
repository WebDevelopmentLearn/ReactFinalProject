
import styles from './CategoriesComponent.module.scss';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {Loader} from "../Loader/Loader";
import {SectionSeparator} from "../SectionSeparator/SectionSeparator";
import STATUS from "../../utils/Utils";


export const CategoriesComponent = () => {
    const { categories, status, error } = useSelector(state => state.categoriesReducer);
    const firstCategories = categories ? categories.slice(0, 4) : [];

    return (
        <section className={styles.CategoriesComponent}>
            <SectionSeparator sectionName="Categories" path="/categories" fullSectionName="All categories" />

            <div className={styles.CategoriesContainer}>
                {status === STATUS.LOADING ? <Loader /> : (
                    firstCategories.length ? firstCategories.map((category) => (
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
        </section>
    )
}
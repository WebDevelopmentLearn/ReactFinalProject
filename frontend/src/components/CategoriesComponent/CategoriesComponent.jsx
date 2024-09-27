import styles from './CategoriesComponent.module.scss';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {BACKEND_URL} from "../../store/reducers/actionCreators";
import {Loader} from "../Loader/Loader";
import {SectionSeparator} from "../SectionSeparator/SectionSeparator";
import STATUS from "../../utils/Utils";
import {CategoryCard} from  "../../components";


export const CategoriesComponent = () => {
    const { categories, status, error } = useSelector(state => state.categoriesReducer);
    const firstCategories = categories ? categories.slice(0, 4) : [];

    return (
        <section className={styles.CategoriesComponent}>
            <SectionSeparator sectionName="Categories" path="/categories" fullSectionName="All categories" />
            <div className={styles.CategoriesContainer}>
                {status === STATUS.LOADING ? <Loader /> : (
                    firstCategories.length ? firstCategories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    )) : <h2 className={styles.NoCategories}>No categories</h2>
                )}
            </div>
        </section>
    )
}
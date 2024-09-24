
import styles from './CardSection.module.scss';

export const CardSection = ({status, cardsArray, }) => {
    return (
        <div className={styles.CategoriesContainer}>
            {/*{status === "LOADING" ? <Loader/> : (*/}
            {/*    firstCategories.map((category) => (*/}
            {/*        <Link key={category.id} to={`/categories/${category.id}`} className={styles.Category}>*/}
            {/*            <img*/}
            {/*                className={styles.CategoryImage}*/}
            {/*                src={`${BACKEND_URL}/${category.image}`}*/}
            {/*                alt={category.title}*/}
            {/*                loading="lazy"*/}
            {/*            />*/}
            {/*            <h3 className={styles.CategoryName}>{category.title}</h3>*/}
            {/*        </Link>*/}
            {/*    ))*/}
            {/*)}*/}
        </div>
    )
}
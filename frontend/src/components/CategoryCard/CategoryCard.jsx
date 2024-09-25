import {Link} from "react-router-dom";
import styles from "./CategoryCard.module.scss";
import {BACKEND_URL} from "../../store/reducers/actionCreators";

export const CategoryCard = ({category}) => {
    return (
        <Link key={category.id} to={`/categories/${category.id}`} className={styles.CategoryCard}>
            <img
                src={`${BACKEND_URL}/${category.image}`}
                alt={category.title}
                loading="lazy"
            />
            <h4 className={styles.CategoryName}>{category.title}</h4>
        </Link>
    )
}
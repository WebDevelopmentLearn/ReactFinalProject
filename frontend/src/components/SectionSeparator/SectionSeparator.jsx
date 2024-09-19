
import {Link} from "react-router-dom";
import styles from './SectionSeparator.module.scss';

export const SectionSeparator = ({sectionName, path, fullSectionName}) => {
    return (
        <div className={styles.CategoriesPanel}>
            <h2 className={styles.CategoriesHeader}>{sectionName}</h2>
            <hr/>
            <Link className={styles.AllCategoriesLink} to={path}>
                <span className={styles.AllCategoriesLinkSpan}>{fullSectionName}</span>
            </Link>
        </div>
    )
}
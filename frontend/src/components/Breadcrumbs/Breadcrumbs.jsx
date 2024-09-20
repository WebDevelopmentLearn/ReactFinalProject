import {Link, useLocation} from "react-router-dom";
import styles from './Breadcrumbs.module.scss'; // Подключаем стили

export const Breadcrumbs = () => {
    const location = useLocation();
    // Разбиваем путь на сегменты
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <nav aria-label="breadcrumb">

            <ul className={styles.breadcrumb}>
                {/* Ссылка на главную страницу */}
                <li>
                    <Link to="/">Главная</Link>
                </li>

                <hr/>
                {/* Генерация крошек для каждой части пути */}
                {pathnames.map((value, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <li key={index} className={styles.breadcrumbItemActive}>
                            {decodeURIComponent(value)} {/* Последняя крошка, не является ссылкой */}
                        </li>
                    ) : (
                        <li key={index} className={styles.breadcrumbItem}>
                            <Link to={routeTo}>{decodeURIComponent(value)}</Link>

                        </li>

                    );
                })}
            </ul>
        </nav>
    );
}
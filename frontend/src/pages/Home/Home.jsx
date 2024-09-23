import {Layout} from "../../layouts/Layout/Layout";
import {AboutBanner, CategoriesComponent, DiscountBanner, SalesComponent} from "../../components";
import styles from './Home.module.scss';
import {useBreadcrumbs} from "../../utils/CustomHooks";

export const Home = () => {
    useBreadcrumbs();
    return (
        <Layout>
            <main className={styles.Home}>
                <AboutBanner/>
                <CategoriesComponent/>
                <DiscountBanner />
                <SalesComponent />
            </main>
        </Layout>
    )
}
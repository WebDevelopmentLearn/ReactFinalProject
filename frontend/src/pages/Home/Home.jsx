import {Layout} from "../../layouts/Layout/Layout";
import {AboutBanner, CategoriesComponent, DiscountBanner, SalesComponent} from "../../components";
import styles from './Home.module.scss';

export const Home = () => {

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
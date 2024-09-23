
import styles from "./Sales.module.scss";
import {Layout} from "../../layouts/Layout/Layout";
import {Breadcrumbs, Loader, ProductCard, SortControlPanel} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllProducts} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {useBreadcrumbs} from "../../utils/CustomHooks";

export const Sales = () => {

    const {products, status, error} = useSelector(state => state.productsReducer);

    const discountProducts = products.filter(product => product.discont_price);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());

    }, []);

    useBreadcrumbs();

    return (
        <Layout>
            {/*<div className={styles.Sales}>*/}
            {/*    <h1 className={styles.SalesHeader}>Sales</h1>*/}
            {/*    <SortControlPanel setSortedBy={null} showDiscountCheckbox={false}/>*/}
            {/*</div>*/}

            <div className={styles.Sales}>

                {status === STATUS.LOADING ? <Loader/> : (
                    <div>
                        <h1 className={styles.SalesHeader}>All Sales</h1>
                        <SortControlPanel setSortedBy={null} showDiscountCheckbox={false}/>

                        <div className={styles.SalesProductsContainer}>
                            {discountProducts?.length ? discountProducts?.map((product) => (
                                <ProductCard isDiscountPrice={true} key={product.id} data={product} addCartBtn={true}/>
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
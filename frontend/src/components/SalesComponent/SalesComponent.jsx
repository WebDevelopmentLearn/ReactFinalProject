import {SectionSeparator} from "../SectionSeparator/SectionSeparator";

import styles from './SalesComponent.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {BACKEND_URL, getAllProducts} from "../../store/reducers/actionCreators";
import {Loader} from "../Loader/Loader";
import {Link} from "react-router-dom";
import {ProductCard} from "../ProductCard/ProductCard";

export const SalesComponent = () => {

    const dispatch = useDispatch();
    const {products, status, error} = useSelector(state => state.productsReducer);
    // const firstProducts = products.slice().filter(product => product.discont_price).slice(0, 4);
    const randomProducts = products ? products.slice().filter(product => product.discont_price).sort(() => Math.random() - 0.5).slice(0, 4) : [];


    useEffect(() => {
        dispatch(getAllProducts());
        console.log(randomProducts);
    }, []);

    return (
        <section className={styles.SalesComponent}>
            <SectionSeparator sectionName="Sale" path="/sales/all" fullSectionName="All sales"/>
            <div className={styles.SaleProductsContainer}>
                {status === "LOADING" ? <Loader/> : (
                    randomProducts.length ? randomProducts.map((product) => (
                        // <Link key={product.id} to={`/categories/${product.id}`} className={styles.SaleProduct}>
                        //     <img
                        //         className={styles.CategoryImage}
                        //         src={`${BACKEND_URL}/${product.image}`}
                        //         alt={product.title}
                        //         loading="lazy"
                        //     />
                        //     <div className={styles.ProductsInfo}>
                        //         <h3 className={styles.ProductTitleHeader}>{product.title}</h3>
                        //         <div className={styles.ProductPriceInfo}>
                        //             <p className={styles.ProductPrice}>${product.discont_price}</p>
                        //             <p className={styles.ProductDiscountPrice}>${product.price}</p>
                        //             {/*Получить скидку в %*/}
                        //             <p className={styles.ProductDiscount}>
                        //                 -{Math.round(((product.price - product.discont_price) * 100) / product.price)}%
                        //             </p>
                        //         </div>
                        //     </div>
                        // </Link>
                            <ProductCard key={product.id} data={product} addCartBtn={false}/>
                        )
                    ) : <h2 className={styles.NoProducts}>No products</h2>
                )}
            </div>
        </section>
    )
}
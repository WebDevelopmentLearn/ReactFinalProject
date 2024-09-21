import {Layout} from "../../layouts/Layout/Layout";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategoryById} from "../../store/reducers/actionCreators";
import {Breadcrumbs, CustomSelect, Loader, ProductCard} from "../../components";
import styles from './Category.module.scss';

const options = [
    { value: 'default', label: 'by default' },
    { value: 'newest', label: 'newest' },
    { value: 'price-high-low', label: 'price: high-low' },
    { value: 'price-low-high', label: 'price: low-high' },
];

export const Category = () => {

    const {categoryId} = useParams();
    console.log(categoryId);

    const {currentCategory, status, error} = useSelector(state => state.categoriesReducer);

    const [sortedBy, setSortedBy] = useState('default');
    const [products, setProducts] = useState([]);

    // const {category} = categories.slice().filter(category => category.id === Number(categoryId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryById(Number(categoryId)));
        //setProducts
        // setProducts(currentCategory?.data);
        //
        console.log(currentCategory?.data);

    }, [sortedBy]);

    const handleSelectChange = (value) => {
        console.log('Selected:', value);
        setSortedBy(value);
    };

    const onChangePrice = (e) => {
        const value = e.target.value;
        if (value.match(/[a-zA-Z]/)) {
            e.target.value = value.replace(/[a-zA-Z]/, '');
        }
    }


    return (
        <Layout>
            <div className={styles.Category}>
                <Breadcrumbs />
                {status === "LOADING" ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>{currentCategory?.category?.title}</h1>

                        <div className={styles.CategorySortPanel}>

                            <div className={styles.priceInputs}>
                                <label className={styles.priceFromInput} htmlFor="priceFromInput">
                                    <span>Price</span>
                                    <input onChange={onChangePrice} id="priceFromInput" type="text" placeholder="from"/>
                                </label>

                                <label className={styles.priceToInput} htmlFor="priceToInput">
                                    <input onChange={onChangePrice} id="priceToInput" type="text" placeholder="to"/>
                                </label>
                            </div>

                            <label className={styles.discountedItemsCheckbox} htmlFor="discountedItemsCheckbox">
                                <span>Discounted items</span>
                                <input id="discountedItemsCheckbox" type="checkbox"/>
                            </label>

                            <label className={styles.CategorySortSelectLabel} htmlFor="sortedBy">
                                <span>Sorted</span>
                                <CustomSelect
                                    className={styles.CategorySortSelect}
                                    options={options}
                                    defaultValue="by default"
                                    onChange={handleSelectChange}
                                />
                            </label>
                        </div>

                        <div className={styles.CategoryProductsContainer}>
                            {currentCategory?.data?.length ? currentCategory?.data?.map((product) => (
                                <ProductCard key={product.id} data={product} addCartBtn={true} />
                            )) : <h2 className={styles.NoProducts}>No products</h2>}
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
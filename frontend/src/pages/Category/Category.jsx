import {Layout} from "../../layouts/Layout/Layout";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCategoryById} from "../../store/reducers/actionCreators";
import {Breadcrumbs, CustomSelect, Loader} from "../../components";
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
    // const {category} = categories.slice().filter(category => category.id === Number(categoryId));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryById(Number(categoryId)));
        console.log(currentCategory);
    }, []);

    const handleSelectChange = (value) => {
        console.log('Selected:', value);
    };


    return (
        <Layout>
            <div className={styles.Category}>
                <Breadcrumbs />
                {status === "LOADING" ? <Loader /> : (
                    <div>
                        <h1 className={styles.CategoryHeader}>{currentCategory?.category?.title}</h1>

                        <div className={styles.CategorySortPanel}>
                            <span>Price</span>
                            <label htmlFor="priceFromInput">
                                <input id="priceFromInput" type="text" placeholder="from"/>
                            </label>

                            <label htmlFor="priceToInput">
                                <input id="priceToInput" type="text" placeholder="to"/>
                            </label>

                            <label htmlFor="discountedItemsCheckbox">
                                <span>Discounted items</span>
                                <input id="discountedItemsCheckbox" type="checkbox"/>
                            </label>

                            <label className={styles.CategorySortSelectLabel} htmlFor="sortedBy">
                                <span>Sorted</span>
                                {/*<select name="sortedBy" id="sortedBy">*/}
                                {/*    <option value="default">by default</option>*/}
                                {/*    <option value="newest">newest</option>*/}
                                {/*    <option value="price-high-low">price: high-low</option>*/}
                                {/*    <option value="price-low-high">price: low-high</option>*/}
                                {/*</select>*/}
                                <CustomSelect
                                    className={styles.CategorySortSelect}
                                    options={options}
                                    defaultValue="by default"
                                    onChange={handleSelectChange}
                                />
                            </label>
                        </div>
                    </div>

                )}
            </div>
        </Layout>
    )
}
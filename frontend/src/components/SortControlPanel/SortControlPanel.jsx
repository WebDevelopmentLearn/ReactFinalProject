
import styles from './SortControlPanel.module.scss';
import {CustomSelect} from "../CustomSelect/CustomSelect";

const options = [
    { value: 'default', label: 'by default' },
    { value: 'newest', label: 'newest' },
    { value: 'price-high-low', label: 'price: high-low' },
    { value: 'price-low-high', label: 'price: low-high' },
];

export const SortControlPanel = ({setSortedBy = null, showDiscountCheckbox = true}) => {


    const handleSelectChange = (value) => {
        console.log('Selected:', value);
        if (setSortedBy) {
            setSortedBy(value);
        }
    };

    const onChangePrice = (e) => {
        const value = e.target.value;
        if (value.match(/[a-zA-Z]/)) {
            e.target.value = value.replace(/[a-zA-Z]/, '');
        }
    }

    return (
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

            {showDiscountCheckbox && (
                <label className={styles.discountedItemsCheckbox} htmlFor="discountedItemsCheckbox">
                    <span>Discounted items</span>
                    <input id="discountedItemsCheckbox" type="checkbox"/>
                </label>
            )}

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
    )
}
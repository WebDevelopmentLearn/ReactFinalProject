
import styles from './SortControlPanel.module.scss';
import {CustomSelect} from "../CustomSelect/CustomSelect";
import {useDispatch, useSelector} from "react-redux";
import {setFilter, toggleDiscount} from "../../store/reducers/filterSlice";
import {filter} from "../../store/selectors";

const options = [
    { value: 'default', label: 'by default' },
    { value: 'newest', label: 'newest' },
    { value: 'price-high-low', label: 'price: high-low' },
    { value: 'price-low-high', label: 'price: low-high' },
];

export const SortControlPanel = ({showDiscountCheckbox = true}) => {
    const dispatch = useDispatch();
    const customFilter = useSelector(filter)
    const handleSelectChange = (value) => {
        dispatch(setFilter({
            ...customFilter,
            sort: value
        }))
    };

    const onChangePriceFrom = (e) => {
        const value = Number(e.target.value);
        dispatch(setFilter({
            ...customFilter,
            price: {...customFilter.price,
                from: value
            }
        }))
    }

    const onChangePriceTo = (e) => {
        const value = Number(e.target.value);
        dispatch(setFilter({
            ...customFilter,
            price: {...customFilter.price,
                to: value
            }
        }))
    }

    return (
        <div className={styles.CategorySortPanel}>

            <div className={styles.priceInputs}>
                <label className={styles.priceFromInput} htmlFor="priceFromInput">
                    <span>Price</span>
                    <input value={customFilter.price.from} onChange={onChangePriceFrom} id="priceFromInput" type="number" placeholder="from" min={0}/>
                </label>

                <label className={styles.priceToInput} htmlFor="priceToInput">
                    <input value={customFilter.price.to} onChange={onChangePriceTo} id="priceToInput" type="number" placeholder="to" min={0}/>
                </label>
            </div>

            {showDiscountCheckbox && (
                <label className={styles.discountedItemsCheckbox} htmlFor="discountedItemsCheckbox">
                    <span>Discounted items</span>
                    <input checked={customFilter.isDiscount}  onChange={() => dispatch(toggleDiscount(!customFilter.isDiscount))}  id="discountedItemsCheckbox" type="checkbox"/>
                </label>
            )}

            <label className={styles.CategorySortSelectLabel} htmlFor="sortedBy">
                <span>Sorted</span>
                <CustomSelect
                    className={styles.CategorySortSelect}
                    options={options}
                    value={customFilter.sort}
                    onChange={handleSelectChange}
                />

            </label>
        </div>
    )
}
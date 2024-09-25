import styles from "./AddToCartBtn.module.scss";

export const AddToCartBtn = ({isDisabled, onClick, title = "Add to cart", product, className}) => {
    
    return (
        <button disabled={isDisabled} onClick={(event) => onClick(event, product) } className={`${className} ${styles.AddToCartBtn}`}>
            {title}
        </button>
    )
}
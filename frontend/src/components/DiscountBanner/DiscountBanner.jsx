
import styles from './DiscountBanner.module.scss';
import discountImg from '../../assets/home/discount_bg.png';
export const DiscountBanner = () => {
    return (
        <section className={styles.DiscountBanner}>
            <div className={styles.DiscountBannerContainer}>
                <h1 className={styles.DiscountHeader}>5% off on the first order</h1>
                <div className={styles.DiscountContent}>
                    <img src={discountImg} alt=""/>
                    <form className={styles.DiscountForm} action="">
                        <input type="text" placeholder="Name"/>
                        <input type="text" placeholder="Phone number"/>
                        <input type="text" placeholder="Email"/>
                        <button className={styles.GetDiscountBtn} type="submit">Get a discount</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
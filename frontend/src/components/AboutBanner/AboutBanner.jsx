
import aboutImg from '../../assets/home/about_bg.png';
import styles from './AboutBanner.module.scss';
import {useNavigate} from "react-router-dom";
export const AboutBanner = () => {
    const navigate = useNavigate();
    return (
        <section className={styles.AboutBanner} style={{backgroundImage: `url(${aboutImg})`}}>
            <div>
                <h1 className={styles.AboutHeader}>Amazing Discounts on Pets Products!</h1>
                <button onClick={() => navigate("/sales")} className={styles.CheckoutBtn}>Check out</button>
            </div>
        </section>
    )
}
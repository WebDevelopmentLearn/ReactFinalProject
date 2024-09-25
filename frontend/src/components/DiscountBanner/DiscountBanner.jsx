import styles from './DiscountBanner.module.scss';
import discountImg from '../../assets/home/discount_bg.png';
import {useDispatch, useSelector} from "react-redux";
import {sendDiscountForm} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";
import {useContext, useEffect} from "react";
import {DiscountAndOrderForm} from "../DiscountAndOrderForm/DiscountAndOrderForm";

export const DiscountBanner = () => {
    const { addNotification } = useContext(NotificationContext);

    const dispatch = useDispatch();
    const {status, error} = useSelector(state => state.discountReducer);

    useEffect(() => {
        if (status === STATUS.SUCCESS) {
            addNotification("Discount has been successfully sent", "success");
        } else if (status === STATUS.FAILED && error) {
            addNotification("An error occurred while submitting the form", "error");
        }
    }, [status]);

    const submitForm = (data) => {
        const customerData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
        }
        dispatch(sendDiscountForm(customerData));
    }


    return (
        <section className={styles.DiscountBanner}>
            <div className={styles.DiscountBannerContainer}>
                <h1 className={styles.DiscountHeader}>5% off on the first order</h1>
                <div className={styles.DiscountContent}>
                    <img src={discountImg} alt=""/>
                    <DiscountAndOrderForm status={status} submitForm={submitForm} title={"Get a discount"} formClass={`${styles.DiscountForm}`} buttonClass={styles.GetDiscountBtn} />
                </div>
            </div>
        </section>
    )
}

import styles from './DiscountBanner.module.scss';
import discountImg from '../../assets/home/discount_bg.png';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {sendDiscountForm} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";
import {useContext, useEffect} from "react";
import {DiscountAndOrderForm} from "../DiscountAndOrderForm/DiscountAndOrderForm";
import {clearStatus} from "../../store/reducers/discountSlice";

export const DiscountBanner = () => {
    const { addNotification } = useContext(NotificationContext);
    const {register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm();

    const dispatch = useDispatch();
    const {status, error, discount} = useSelector(state => state.discountReducer);

    useEffect(() => {
        if (status === STATUS.SUCCESS) {
            addNotification("Discount has been successfully sent", "success");
            dispatch(clearStatus());
        } else if (status === STATUS.FAILED && error) {
            addNotification(error, "error");
        }
    }, [status]);

    const submitForm = (data) => {
        console.log(data);
        const customerData = {
            name: data.name,
            phone: data.phone,
            email: data.email,
        }
        dispatch(sendDiscountForm(customerData));
    }

    if (status === STATUS.SUCCESS) {
        console.log(discount);
    }


    return (
        <section className={styles.DiscountBanner}>
            {}
            <div className={styles.DiscountBannerContainer}>
                <h1 className={styles.DiscountHeader}>5% off on the first order</h1>
                <div className={styles.DiscountContent}>
                    <img src={discountImg} alt=""/>
                    <DiscountAndOrderForm status={status}  submitForm={submitForm} title={"Get a discount"} formClass={`${styles.DiscountForm}`} buttonClass={styles.GetDiscountBtn} />
                </div>
            </div>
        </section>
    )
}

import styles from './DiscountBanner.module.scss';
import discountImg from '../../assets/home/discount_bg.png';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {sendDiscountForm} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";
import {useContext, useEffect} from "react";
import {DiscountAndOrderForm} from "../DiscountAndOrderForm/DiscountAndOrderForm";
import {clearCart} from "../../store/reducers/cartSlice";
import {clearStatus} from "../../store/reducers/discountSlice";
export const DiscountBanner = () => {
    const { addNotification } = useContext(NotificationContext);
    const {register,
        handleSubmit,
        formState: {errors, isValid}} = useForm();

    const dispatch = useDispatch();
    const {status, error, discount} = useSelector(state => state.discountReducer);

    useEffect(() => {
        if (status === STATUS.SUCCESS) {
            addNotification("Discount has been successfully sent", "success");
            dispatch(clearStatus());
        } else if (status === STATUS.FAILED) {
            addNotification("Failed to send discount", "error");
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
                    {/*<form onSubmit={handleSubmit(submitForm)} className={styles.DiscountForm} action="">*/}
                    {/*    <input {...register("nameInput", {*/}
                    {/*        required: "This field is required",*/}
                    {/*        minLength: {value: 3, message: "Minimum length is 3 characters"}*/}
                    {/*    })} type="text" placeholder="Name"/>*/}
                    {/*    <input {...register("phoneInput", {*/}
                    {/*        required: "This field is required",*/}
                    {/*        pattern: {*/}
                    {/*            value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,*/}
                    {/*            message: "Invalid phone number"*/}
                    {/*        }*/}
                    {/*    })} type="tel" placeholder="Phone number"/>*/}

                    {/*    <input {...register("emailInput", {*/}
                    {/*        required: "This field is required",*/}
                    {/*        minLength: {value: 3, message: "Minimum length is 3 characters"}*/}
                    {/*    })} type="email" placeholder="Email"/>*/}
                    {/*    <button className={styles.GetDiscountBtn} type="submit">Get a discount</button>*/}
                    {/*</form>*/}
                    <DiscountAndOrderForm status={status}  submitForm={submitForm} title={"Get a discount"} formClass={`${styles.DiscountForm}`} buttonClass={styles.GetDiscountBtn} />
                </div>
            </div>
        </section>
    )
}
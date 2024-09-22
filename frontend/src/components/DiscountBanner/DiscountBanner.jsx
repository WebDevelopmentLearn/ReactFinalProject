
import styles from './DiscountBanner.module.scss';
import discountImg from '../../assets/home/discount_bg.png';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {sendDiscountForm} from "../../store/reducers/actionCreators";
import STATUS from "../../utils/Utils";
import {NotificationContext} from "../../context/NotificationContext";
import {useContext} from "react";
export const DiscountBanner = () => {
    const { addNotification } = useContext(NotificationContext);
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: "onChange"});
    const dispatch = useDispatch();
    const {status, error, discount} = useSelector(state => state.discountReducer);

    const submitForm = (data) => {
        console.log(data);
        const customerData = {
            name: data.nameInput,
            phone: data.phoneInput,
            email: data.emailInput,
        }
        dispatch(sendDiscountForm(customerData));
        // switch (status) {
        //     case STATUS.SUCCESS:
        //         addNotification("Discount has been successfully sent", "success");
        //         console.log("TEST");
        //         break;
        //     case STATUS.FAILED:
        //         addNotification("Failed to send discount", "error");
        //         break;
        //     default:
        //         addNotification("Loading...", "loading");
        // }

        if (status === STATUS.SUCCESS) {
            addNotification("Discount has been successfully sent", "success");
        } else if (status === STATUS.FAILED) {
            addNotification("Failed to send discount", "error");
        }
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
                    <form onSubmit={handleSubmit(submitForm)} className={styles.DiscountForm} action="">
                        <input {...register("nameInput", {
                            required: "This field is required",
                            minLength: {value: 3, message: "Minimum length is 3 characters"}
                        })} type="text" placeholder="Name"/>
                        <input {...register("phoneInput", {
                            required: "This field is required",
                            pattern: {
                                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                message: "Invalid phone number"
                            }
                        })} type="tel" placeholder="Phone number"/>
                        <input {...register("emailInput", {
                            required: "This field is required",
                            minLength: {value: 3, message: "Minimum length is 3 characters"}
                        })} type="email" placeholder="Email"/>
                        <button className={styles.GetDiscountBtn} type="submit">Get a discount</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
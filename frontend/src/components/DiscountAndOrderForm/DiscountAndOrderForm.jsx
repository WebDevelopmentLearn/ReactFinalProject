import styles from './DiscountAndOrderForm.module.scss';
import {useForm} from "react-hook-form";
import STATUS from "../../utils/Utils";

export const DiscountAndOrderForm = ({status = null, formClass, buttonClass, submitForm, title}) => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm();

    return (
        <form onSubmit={handleSubmit(submitForm)} className={formClass} action="">
            <input disabled={status === STATUS.SUCCESS} {...register("name", {
                required: {
                    value: true,
                    message: "Name is required"
                }
            })} type="text" placeholder="Name"/>
            <input disabled={status === STATUS.SUCCESS} {...register("phone", {
                required: {
                    value: true,
                    message: "phone is required"
                },
                pattern: {
                    value: /^\+?[\d\s\-()]{10,15}$/,
                    message: "Invalid phone number"
                }
            })} type="tel" placeholder="Phone number"/>
            <input disabled={status === STATUS.SUCCESS} {...register("email", {
                required: {
                    value: true,
                    message: "email is required"
                }
            })} type="email" placeholder="Email"/>
            {errors.name && <p className={styles.Error}>{errors.name.message}</p>}
            {errors.phone && <p className={styles.Error}>{errors.phone.message}</p>}
            {errors.email && <p className={styles.Error}>{errors.email.message}</p>}
            <button disabled={status === STATUS.SUCCESS} className={buttonClass} type="submit">{title}</button>
        </form>
    )
}

import styles from './Notification.module.scss';
import {NotificationContext} from "../../context/NotificationContext";
import {useContext} from "react";

export const Notification = ({message, status}) => {
    const { notifications, removeNotification } = useContext(NotificationContext);

    return (
        <div className={styles.notificationContainer}>
            {notifications.map((notification) => (
                <div key={notification.id} className={`${styles.notification} ${styles[notification.type]}`}>
                    <p>{notification.message}</p>
                    <button onClick={() => removeNotification(notification.id)}>X</button>
                </div>
            ))}
        </div>
    );
}
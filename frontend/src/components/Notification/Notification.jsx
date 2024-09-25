import styles from './Notification.module.scss';
import {NotificationContext} from "../../context/NotificationContext";
import {useContext} from "react";

export const Notification = ({message, status}) => {
    const { notifications, removeNotification } = useContext(NotificationContext);

    const closeNotification = (id) => {
        removeNotification(id);
    }

    return (
        <div className={`${styles.notificationContainer} ${notifications.length ? styles.active : ""}`}>
            {notifications.map((notification) => (
                <div key={notification.id} className={`${styles.notification} ${styles[notification.type]}`}>
                    <p>{notification.message}</p>
                    <button className={styles.closeNotificationBtn} onClick={() => closeNotification(notification.id)}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M18 6L6 18" stroke="#ffffff" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                            <path fill="currentColor" d="M6 6L18 18" stroke="#ffffff" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}
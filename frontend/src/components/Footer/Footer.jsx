
import styles from './Footer.module.scss';

import instagramIcon from '../../assets/instagram_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';

export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <h2 className={styles.FooterHeader}>Contact</h2>
            <div className={styles.ContactInfo}>
                <div className={styles.PhoneAndSocialsContainer}>
                    <div className={`${styles.PhoneNumber} ${styles.ContactInfoDiv}`}>
                        <h4>Phone</h4>
                        <p>+49 30 915-88492</p>
                    </div>
                    <div className={`${styles.Socials} ${styles.ContactInfoDiv}`}>
                        <h4>Socials</h4>
                        <a href="https://instagram.com">
                            <img src={instagramIcon} alt="instagram_icon"/>
                        </a>

                        <a href="https://whatsapp.com">
                            <img src={whatsappIcon} alt="whatsapp_icon"/>
                        </a>
                    </div>
                </div>

                <div className={styles.AddressAndWorkingHoursContainer}>
                    <div className={`${styles.Address} ${styles.ContactInfoDiv}`}>
                        <h4>Address</h4>
                        <p>Wallstraẞe 9-13, 10179 Berlin,</p>
                        <p>Deutschland</p>
                    </div>
                    <div className={`${styles.WorkingHours} ${styles.ContactInfoDiv}`}>
                        <h4>Working hours</h4>
                        <p>24 hours a day</p>
                    </div>
                </div>
            </div>

            <div className={styles.FooterMap}>
                <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=Wallstra%E1%BA%9Ee%209-13,%2010179%20Berlin+(IT%20Career%20Hub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&z=18">
                    <a href="https://www.gps.ie/">gps devices</a></iframe>
            </div>
        </footer>
    )
}
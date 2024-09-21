
import styles from './Footer.module.scss';


export const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <h2 className={styles.FooterHeader}>Contact</h2>

            <div className={styles.ContactInfo}>
                <div className={`${styles.PhoneNumber} ${styles.ContactCard}`}>
                    <h4>Phone</h4>
                    <p>+49 30 915-88492</p>
                </div>
                <div className={`${styles.Socials} ${styles.ContactCard}`}>
                    <h4>Socials</h4>
                    <div className={styles.SocialsLinks}>
                        <a href="https://instagram.com">
                            {/*<img src={instagramIcon} alt="instagram_icon"/>*/}
                            <svg className={styles.InstagramIcon} width="38" height="38" viewBox="0 0 38 38"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M28.5 0H9.5C4.27546 0 0 4.27361 0 9.5V28.5C0 33.7245 4.27546 38 9.5 38H28.5C33.7245 38 38 33.7245 38 28.5V9.5C38 4.27361 33.7245 0 28.5 0ZM19 26.9164C14.6271 26.9164 11.0832 23.3709 11.0832 19C11.0832 14.6271 14.6271 11.0832 19 11.0832C23.3709 11.0832 26.9168 14.6271 26.9168 19C26.9168 23.3709 23.3709 26.9164 19 26.9164ZM29.2918 11.0832C27.9789 11.0832 26.9168 10.0196 26.9168 8.70818C26.9168 7.39673 27.9789 6.33318 29.2918 6.33318C30.6047 6.33318 31.6668 7.39673 31.6668 8.70818C31.6668 10.0196 30.6047 11.0832 29.2918 11.0832Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>

                        <a href="https://whatsapp.com">
                            {/*<img src={whatsappIcon} alt="whatsapp_icon"/>*/}
                            <svg className={styles.WhatsAppIcon} width="39" height="38" viewBox="0 0 39 38"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.2793 0C8.8027 0 0.279297 8.52279 0.279297 19C0.279297 22.6862 1.3363 26.24 3.34268 29.3263L0.381966 36.2348C0.177865 36.7098 0.284245 37.2628 0.650391 37.6289C0.892838 37.8714 1.21693 38 1.54596 38C1.71419 38 1.88428 37.9666 2.04508 37.8973L8.95361 34.936C12.0393 36.9436 15.5931 38 19.2793 38C29.7565 38 38.2793 29.4772 38.2793 19C38.2793 8.52279 29.7565 0 19.2793 0ZM29.0316 25.8009C29.0316 25.8009 27.452 27.8271 26.3103 28.3008C23.4083 29.502 19.3115 28.3008 14.6443 23.635C9.97845 18.9678 8.77672 14.871 9.97845 11.969C10.4522 10.826 12.4784 9.24766 12.4784 9.24766C13.0276 8.81966 13.8811 8.87285 14.3734 9.36517L16.6656 11.6573C17.1579 12.1496 17.1579 12.9561 16.6656 13.4484L15.227 14.8858C15.227 14.8858 14.6443 16.6349 18.1437 20.1355C21.6432 23.635 23.3935 23.0523 23.3935 23.0523L24.8309 21.6137C25.3232 21.1214 26.1297 21.1214 26.622 21.6137L28.9141 23.9059C29.4064 24.3982 29.4596 25.2505 29.0316 25.8009Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={`${styles.Address} ${styles.ContactCard}`}>
                    <h4>Address</h4>
                    <p>Wallstraẞe 9-13, 10179 Berlin,</p>
                    <p>Deutschland</p>
                </div>
                <div className={`${styles.WorkingHours} ${styles.ContactCard}`}>
                    <h4>Working hours</h4>
                    <p>24 hours a day</p>
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
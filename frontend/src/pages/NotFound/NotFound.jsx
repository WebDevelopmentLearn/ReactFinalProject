import {Layout} from "../../layouts/Layout/Layout";

import fourImg from "../../assets/notfound/4.svg";
import animalsImg from "../../assets/notfound/notfound_animals.png";
import notfoundImg from "../../assets/notfound/notfound_img.png";
import styles from './NotFound.module.scss';
import {useNavigate} from "react-router-dom";
export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <Layout>
            <div className={styles.NotFound}>
                <div className={styles.NotFoundImg}>
                    {/*<img className={styles.NotFoundFourImg} src={fourImg} alt="four_img"/>*/}
                    {/*<img className={styles.NotFoundAnimalsImg} src={animalsImg} alt="animals_img"/>*/}
                    {/*<img className={styles.NotFoundFourImg} src={fourImg} alt="four_img"/>*/}
                    <img className={styles.NotFoundFourImg} src={notfoundImg} alt="notfound_img"/>
                </div>
                <div className={styles.NotFoundInfo}>
                <h1 className={styles.NotFoundTitle}>404 Not found</h1>
                    <p className={styles.NotFoundDescription}>We’re sorry, the page you requested could not be found.</p>
                    <p className={styles.NotFoundDescription}>Please go back to the homepage</p>
                    <button className={styles.NotFoundBtn} onClick={() => navigate("/")}>Go Home</button>
                </div>
            </div>
        </Layout>
    )
}
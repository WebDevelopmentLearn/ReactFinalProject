import {useContext} from "react";
import styles from './ModalComponent.module.scss';
import {ModalContext} from "../../context/ModalContext";
export const ModalComponent = ({onClose}) => {
    const { modal, removeModal } = useContext(ModalContext);

    return (
        <div className={`${styles.modalContainer} ${modal ? styles.active : ""}`}>
            <div className={`${styles.modal} ${modal ? styles.activeModal : ""}`}>
                <div className={styles.ModalHeader}>
                    <h5 className="modal-title">
                        {modal?.title || "Заголовок отсутствует"}
                    </h5>
                    <button onClick={() => {
                        modal?.onClose();
                        removeModal();
                    }}>
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M18 6L6 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path fill="currentColor" d="M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={styles.ModalContent}>
                    {modal?.content ? (
                        Object.keys(modal.content).map((key) => (
                            <p key={key} className={styles.ModalContentDesc}>
                                {modal.content[key]}
                            </p>
                        ))
                    ) : (
                        <div style={{ visibility: 'hidden' }}>
                            <p>Контент отсутствует</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
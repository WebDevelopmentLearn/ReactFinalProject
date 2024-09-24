import {useContext, useEffect, useRef, useState} from "react";
import styles from './ModalComponent.module.scss';
import {NotificationContext} from "../../context/NotificationContext";
import {ModalContext} from "../../context/ModalContext";
import x_icon from '../../assets/x_icon.svg';
export const ModalComponent = () => {
    const { modal, removeModal } = useContext(ModalContext);

    return (
        <div className={`${styles.modalContainer} ${modal ? styles.active : ""}`}>
            <div className={`${styles.modal} ${modal ? styles.activeModal : ""}`}>
                <div className={styles.ModalHeader}>
                    <h5 className="modal-title">
                        {modal?.title || "Заголовок отсутствует"}
                    </h5>
                    <button onClick={() => removeModal()}>
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor" d="M18 6L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill="currentColor" d="M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div className={styles.ModalContent}>
                    {/* Если контент существует, отображаем его, иначе скрываем */}
                    {modal?.content ? (
                        Object.keys(modal.content).map((key) => (
                            <p key={key} className={styles.ModalContentDesc}>
                                {modal.content[key]}
                            </p>
                        ))
                    ) : (
                        <div style={{ visibility: 'hidden' }}> {/* Скрываем, но не удаляем контент */}
                            <p>Контент отсутствует</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
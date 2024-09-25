import {MainRouter} from "../routes/MainRouter";
import {NotificationContext, NotificationProvider} from "../context/NotificationContext";
import {ModalComponent, Notification} from "../components/";
import React, {useEffect, useState} from "react";
import {BreadcrumbsContext} from "../context/BreadcrumbsContext";
import {ModalContext} from "../context/ModalContext";
import {useDispatch} from "react-redux";
import {getAllProductsAndCategories} from "../store/reducers/actionCreators";

function App() {
    // ================== Breadcrumbs ==================
    const [crumbs, setCrumbs] = useState([]);
    // ================== Breadcrumbs ==================


    // ================== Notifications ==================
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, type = 'info') => {
        const id = Math.random().toString(36).substr(2, 9); // уникальный ID для каждого уведомления
        setNotifications((prev) => [...prev, { id, message, type }]);
        setTimeout(() => removeNotification(id), 2000);
    };

    const removeNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };
    // ================== Notifications ==================


    // ================== Modals ==================
    const [modal, setModal] = useState(null);

    const addModal = (contentObj) => {
        const id = Math.random().toString(36).substr(2, 9);
        const objData = {
            id: id,
            ...contentObj,
            title: contentObj.title,
            content: contentObj.content,
            onClose: contentObj.onClose
        }

        setModal(objData);
    };

    const removeModal = () => {
        setModal(null);
    }
    // ================== Modals ==================


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProductsAndCategories())
    }, [dispatch]);

    return (
      <NotificationContext.Provider value={{notifications, addNotification, removeNotification}}>
          <ModalContext.Provider value={{modal, addModal, removeModal}}>
              <BreadcrumbsContext.Provider value={{crumbs, setCrumbs}}>
                  <Notification />
                  <ModalComponent />
                  <MainRouter />
              </BreadcrumbsContext.Provider>
          </ModalContext.Provider>
      </NotificationContext.Provider>
    );
}

export default App;

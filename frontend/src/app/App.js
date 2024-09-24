import './App.css';
import {MainRouter} from "../routes/MainRouter";
import {NotificationContext, NotificationProvider} from "../context/NotificationContext";
import {ModalComponent, Notification} from "../components/";
import React, {useState} from "react";
import BreadcrumbsContext from "../context/breadcrumbsContext";
import {ModalContext} from "../context/ModalContext";

function App() {
    const [notifications, setNotifications] = useState([]);

    const [crumbs, setCrumbs] = useState([]);
    const addNotification = (message, type = 'info') => {
        const id = Math.random().toString(36).substr(2, 9); // уникальный ID для каждого уведомления
        console.log(id, message, type);
        setNotifications((prev) => [...prev, { id, message, type }]);

        // Автоматическое удаление через 5 секунд
        setTimeout(() => removeNotification(id), 5000);
    };

    const removeNotification = (id) => {
        console.log(notifications);
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const [modal, setModal] = useState(null);
//     {title: 'Congratulations!', content: {…}}
//     content
//         :
//         par1
//             :
//             "Your order has been successfully placed on the website."
//     par2
//         :
//         "A manager will contact you shortly to confirm your order."
//             [[Prototype]]
// :
//     Object
//     title
//         :
//         "Congratulations!"
    const addModal = (contentObj) => {
        const id = Math.random().toString(36).substr(2, 9);
        console.log(contentObj);
        const objData = {
            id: id,
            ...contentObj,
            title: contentObj.title,
            content: contentObj.content
        }
        console.log(objData);
        setModal(objData);
    };

    const removeModal = () => {
        setModal(null);
    }

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

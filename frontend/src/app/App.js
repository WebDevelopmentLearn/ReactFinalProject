import './App.css';
import {MainRouter} from "../routes/MainRouter";
import {NotificationContext, NotificationProvider} from "../context/NotificationContext";
import {Notification} from "../components/";
import React, {useState} from "react";

function App() {
    const [notifications, setNotifications] = useState([]);
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

    return (
      <NotificationContext.Provider value={{notifications, addNotification, removeNotification}}>
          <Notification />
        <MainRouter />
      </NotificationContext.Provider>
    );
}

export default App;

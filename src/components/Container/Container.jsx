import './Container.css';
import Notification from '../Notification/Noitification';
import { useState } from 'react';
import { notificationsArr } from './notifications';
export default function Container() {
  const [notifications, setNotificastions] = useState(notificationsArr);
  console.log(notifications)
  return (
    <div className="container">
      <div className="notifications">
        <div className="title-container">
          <h1 className="title">Notifications</h1>
          <div className="notifications-count">{notifications.reduce((count,notification)=>{
            if(notification.isRead === false){
              count++;
            };
            return count;
          },0)}</div>
        </div>
        <button className="mark-read" onClick={()=>{
          const updatedNotifications = notifications.map((notification)=>{
            notification.isRead = true;
            return notification
          });

          setNotificastions(updatedNotifications);
        }}>Mark all as a read</button>
      </div>
      <div className="notifications-container">
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              setNotificastions = {setNotificastions}
              notificationsArr = {notifications}
              id = {notification.id}
              name={notification.name}
              notificationText={notification.notificationText}
              timePassed={notification.timePassed}
              isRead={notification.isRead}
              picture={notification.picture}
              message={notification.message}
            />
          );
        })}
      </div>
      {/* we should create object which will contain 1.notificaton text 2.time passed since notification 3.read status*/}
    </div>
  );
}

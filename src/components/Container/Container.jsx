import './Container.css';
import Notification from '../Notification/Noitification';
import { useState } from 'react';
export default function Container() {
  const [notifications, setNotificastions] = useState([
    {
      id: 1,
      notificationText: 'You have a new message from John.',
      isRead: false,
      picture: 'src/assets/Image-1.png',
      name: 'John',
      timePassed: '2 hours ago',
    },
    {
      id: 2,
      notificationText: 'Emily liked your post.',
      isRead: false,
      picture: 'src/assets/Image-2.png',
      name: 'Emily',
      timePassed: '15 minutes ago',
    },
    {
      id: 3,
      notificationText: 'New comment from Michael on your photo.',
      isRead: false,
      picture: 'src/assets/Image-3.png',
      name: 'Michael',
      timePassed: '1 day ago',
    },
    {
      id: 4,
      notificationText: 'Sarah invited you to an event.',
      isRead: true,
      picture: 'src/assets/Image-4.png',
      name: 'Sarah',
      timePassed: '3 days ago',
    },
    {
      id: 5,
      notificationText: 'Alex sent you a friend request.',
      isRead: true,
      picture: 'src/assets/Image-5.png',
      name: 'Alex',
      timePassed: '5 hours ago',
      message:
        'Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.',
    },
    {
      id: 6,
      notificationText: 'Jessica mentioned you in a comment.',
      isRead: true,
      picture: 'src/assets/Image-6.png',
      name: 'Jessica',
      timePassed: '30 minutes ago',
    },
    {
      id: 7,
      notificationText: 'You have a new follower: Liam.',
      isRead: true,
      picture: 'src/assets/Image-7.png',
      name: 'Liam',
      timePassed: '12 hours ago',
    },
  ]);
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

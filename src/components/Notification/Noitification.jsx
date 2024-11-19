import './Notification.css';
export default function Notification({
  id,
  setNotificastions,
  notificationsArr,
  name,
  notificationText,
  timePassed,
  isRead,
  picture,
  message
}) {
  return (
    <div
      className="notification-container"
      style={{ backgroundColor: isRead ? '#FFF' : '#F7FAFD' }}
      onClick={()=>{
        setNotificastions(notificationsArr.map((notification)=>{
          if(notification.id === id) notification.isRead = true;
          return notification
        }))
      }}
    >
      <div className="main-txt">
        <img src={picture} className="profile-image" />

        <h1>{name}</h1>
        <p>{notificationText}</p>

        {!isRead && <div className="dot"></div>}
      </div>
      <div className="time-passed">{timePassed}</div>
      {message && <div className="message">{message}</div>}
    </div>
  );
}

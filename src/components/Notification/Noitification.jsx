import './Notification.css';
export default function Notification(props) {
  return (
    <div
      className="notification-container"
      style={{ backgroundColor: props.isRead ? '#FFF' : '#F7FAFD' }}
      onClick={()=>{
        props.setNotificastions(props.notificationsArr.map((notification)=>{
          if(notification.id === props.id) notification.isRead = true;
          return notification
        }))
      }}
    >
      <div className="main-txt">
        <img src={props.picture} className="profile-image" />

        <h1>{props.name}</h1>
        <p>{props.notificationText}</p>

        {!props.isRead && <div className="dot"></div>}
      </div>
      <div className="time-passed">{props.timePassed}</div>
      {props.message && <div className="message">{props.message}</div>}
    </div>
  );
}

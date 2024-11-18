import './Notification.css';
export default function Notification({
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
    >
      <div className="main-txt">
        <img src={picture} className="profile-image" />

        <h1>{name}</h1>
        <p>{notificationText}</p>

        {!isRead && <div className="dot"></div>}
      </div>
      <div className="time-passed">{timePassed}</div>
      {console.log(message)}
      {message && <div className="message">{message}</div>}
    </div>
  );
}

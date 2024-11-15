import './Container.css';
import Notification from '../Notification/Noitification';
export default function Container() {
  const notificationId = [1,2,3,4,5,6,7]
  return (
      <div className="container">
        <div className="notifications">
          <div className="title-container">
            <h1 className="title">Notifications</h1>
            <div className="notifications-count"></div>
          </div>
          <button className="mark-read">Mark all as a read</button>
        </div>
        {notificationId.map((id)=>{
          return <Notification key={id}/>
        })}
      </div>
  );
}

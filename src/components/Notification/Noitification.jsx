import './Notification.css'
export default function Notification() {
  return (<div className='notification-container'>
    <div className="main-txt">
      <h1>Mark webber</h1>
      <p>Followed you</p>
    </div>
    <div className="time-passed">
      5m ago
    </div>
  </div>);
}
import './Container.css';
export default function Container() {
  return (
      <div className="container">
        <div className="notifications">
          <div className="title-container">
            <h1 className="title">Notifications</h1>
            <div className="notifications-count"></div>
          </div>
          <button className="mark-read">Mark all as a read</button>
        </div>
      </div>
  );
}

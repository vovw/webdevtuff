import "./eventitem.css";
// import { Link } from "react-router-dom";
const EventItem = (props) => {
  return (
  <a href={props.href}>
  
  <div className="event-popup">
      <div className="popup-header">
        <a>{props.title}</a>
      </div>
      <div className="popup-content">
        <p>{props.brief}</p>
      </div>
      {/* <button >Close</button> */}
    </div>

    
  </a>
  );
};

export default EventItem;
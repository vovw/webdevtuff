import "./eventitem.css";
// import { Link } from "react-router-dom";
const EventItem = (props) => {
  return (
  <a href={props.href}>
  
  <div style={{position:'fixed',bottom:0}} className="event-popup">
      <div className="popup-header">
        <a>{props.title}</a>
      </div>
      <div className="popup-content">
        <p>{props.brief}</p>
      </div>

    </div>

  </a>
  );
};

export default EventItem;

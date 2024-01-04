import "./left-side.css";
import { useState } from "react";
let LeftSide = (props) => {
  let [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-row">
      <div className="left-content flex flex-row">
        <img
          src={require("../../../img/" + props.img)}
          onMouseOver={() => setToggle(!toggle)}
          onMouseLeave={() => setToggle(!toggle)}
        />
        <div className="l-hr-line flex flex-row items-center justify-center l-hr-line-2">
          <p></p>
        </div>
        <div className="l-hr-line flex flex-row items-center justify-center">
          <p></p>
        </div>
      </div>
      <div className="ver-line"></div>
      <div className="vacant1 flex flex-row items-center">
        <div
          className={
            (toggle ? " l-main-year-transition " : " ") +
            " l-main-year flex flex-row items-center justify-center"
          }
        >
          <p className={toggle ? "" : "l-main-circle-transition"}>
            {props.year}
          </p>
          <img
            className={toggle ? "" : "l-main-circle-transition"}
            src={require("../../../img/techno_img.png")}
          />
        </div>

        <div
          className={
            (toggle ? " l-inc_transition " : " ") +
            " content-discription1 flex flex-col items-end p-2"
          }
        >
          <p className="l-year text-2xl">{props.year}</p>
          <p className="l-brief">{props.des}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;

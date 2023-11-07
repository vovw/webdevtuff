import "./right-side.css";
import { useState } from "react";
let RightSide = (props) => {
    let [toggle, setToggle] = useState(false);
    return (
        <div className="R-3 flex flex-row">
            <div className="vacant2 flex flex-row items-center">
                <div className={(toggle ? 'r-main-year-transition ' : '') + " r-main-year flex flex-row items-center justify-center"}>
                <img className={toggle ? 'r-main-circle-transition ' : ''} src={require('../../../img/techno_img.png')} />
                    <p className={toggle ? 'r-main-circle-transition ' : ''}>{props.year}</p>
                    

                </div>
                <div className={(toggle ? "r-inc_transition" : " ") + " content-discription2 flex flex-col items-start p-2"}>
                    <p className="r-year text-2xl">{props.year}</p>
                    <p className="r-brief">{props.des}</p>
                </div>
            </div>
            <div className="ver-line">
            </div>
            <div className="right-content flex flex-row">
                <div className="r-hr-line flex flex-row items-center justify-center">
                    <p></p>
                </div>
                <div className="r-hr-line flex flex-row items-center justify-center r-hr-line-2">
                    <p></p>
                </div>
                <img src={require('../../../img/' + props.img)} onMouseOver={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)} />
            </div>
        </div>
    )
}
export default RightSide;
import React from "react";
import "./gls.css";
import Fotter from "../fotter/fotter";
import { cardData, incGLS } from "./data";
function Gls() {
  return (
    <>
      <div>
        <p className="text-5xl xl:text-6xl orbitron text-white text-center mt-28">upcomming GLS</p>
        <div className="mb-28 flex flex-col items-center justify-center text-white mt-12 gap-6">
          {incGLS.map((e) => (
            <div className="incGLS flex flex-row justify-center flex-wrap rounded-3xl me-border py-8 md:gap-14 gap-4 mx-6 2xl:mx-80 xl:mx-40 lg:mx-20 md:mx-20 ">
              <img src={require(`../../img/incGLS/${e.img}.jpeg`)} alt={e.name} className="w-72 2xl:w-96 xl:w-80 lg:w-80 md:w-80" />
              <div className="flex flex-col items-start gap-5 w-4/5 2xl:w-1/2 xl:w-2/5 lg:w-2/5 md:w-1/3">
                <p className="text-3xl">{e.name}</p>
                <p>{e.des}</p>
                <div className="flex flex-col gap-3">
                  <p>-Date: {e.date}</p>
                  <p>-Time: {e.time}</p>
                  <p>-Venue: {e.venue}</p>
                </div>
                <a target="_blank" href={e.link} className={`w-full flex flex-row justify-center bg-${e.color}-600 py-2 rounded-2xl gls-main-btn me-border`}>
                  <button>Register here</button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-6xl mt-20 orbitron text-white text-center">Our Past Speakers</p>
        <section className="hero-section">
          <div className="card-grid mx-8 sm:mx-0 gap-8">
            {cardData.map((card, index) => (
              <a
                className={`card ${card.name.toLowerCase()}`}
                href={card.link}
                key={index}
              >
                <div
                  className="card__background"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                ></div>
                <div className="card__content">
                  <h3 className="card__heading">{card.name}</h3>
                  <p className="card__category">{card.category}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
      <Fotter position="static" />
    </>
  );
}
export default Gls;

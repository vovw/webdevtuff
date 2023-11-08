import React from 'react';
import Accordion from './faq';
import './EventInfo.css';
const bgImage = require('../../img/deep-space-bg.jpg');

export default function EventInfo ({ title, imgname, eventDesc, venue, date, price, }){
    return(
        <div className='eventsinfo'>
            <img className='event-bgimg' src={bgImage} alt=''/>
            <div className="toppest-container">
                <div className='top-container'>
                    <div className="detail-container">
                        <div className='event-title'>{title}</div>
                        <div className="event-description">{eventDesc}</div>
                    </div>
                    <div className="poster-container">
                        <img src={require(`../../img/${imgname}`)} alt='' />
                    </div>
                </div>
                <div className="info-bar">
                    <div className='info-item'>Event Brief</div>
                    <div className='info-item'>
                        <img src={require('../../img/icons8-date-64-white.png')} alt="" className='info-icon'/>
                        <span>Date: {date}</span>
                    </div>
                    <div className='info-item'>
                        <img src={require('../../img/icons8-location-64-white.png')} alt=""  className='info-icon'/>
                        <span>Venue:{venue}</span>
                    </div>
                    <div className='info-item'>
                        <img src={require('../../img/icons8-money-50-white.png')} alt=""  className='info-icon'/>
                        <span>Prize: {price}</span>
                    </div>
                </div>
                <div style={{backgroundColor: 'black'}}>
                    <Accordion />
                </div>
            </div>
        </div>

    );
} 


import React from 'react';
import Accordion from './faq';
import './EventInfo.css';
const bgImage = require('../../img/deep-space-bg.jpg');

export default function EventInfo ({ title, imgname, eventDesc, link, docum}){
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
                <a href={link}>
                 <button target="_blank" className="info-button">
                     Register Here
                 </button>
                </a>
                <a href= {docum}>
                 <button target="_blank" className="info-button" >
                     Event Info
                 </button>
                </a>
                </div>

                <div style={{backgroundColor: 'black'}}>
                    <Accordion />
                </div>
            </div>
        </div>

    );
} 


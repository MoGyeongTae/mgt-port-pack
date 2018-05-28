import React from 'react';
import Link from 'react';

import './css/PortItems.css';

const PortItems = ({name,lang,link,word,about}) => {
    return (
        <div className="PortItem">
            <a href={link} target="_blank" className="Port_cover_link">
                <div className="Port_cover">
                    <span className="lang">{lang}</span>
                    <span className="goText">Cilck to Move</span>
                </div>
            </a>
            <div className={word}></div>
            <h4>{name}</h4>
            <p>{about}</p>
        </div>
    )
}

export default PortItems;
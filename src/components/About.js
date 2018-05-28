import React from 'react';

import './css/About.css';

const About = () => {
    return (
        <div className="About">
            <div className="mePaper">
                <h4>Web Front-End Developer</h4>
                <br/>
                <p><span>Name</span> : Mo Gyeong Tae (모경태)</p>
                <p><span>Shool</span> : 서울디지텍고등학교</p>
                <p><span className="language">Language</span> : Html,Css,Js,Php ...</p>
                <br/>
                <p className="framework">
                    <span>FrameWork?</span>
                    <br/>
                    React <br/>
                    Vue <br/>
                    etc... <br/>
                </p>
                <p className="keyword">
                    <span>KeyWord</span>
                    <br/>
                    #SPA, #React, #NodeJs, #Front-End
                </p>
            </div>
        </div>
    )
}

export default About;
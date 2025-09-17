import React from "react";
import './YouTubeComp.css';

 const YoutubeComp = () => {
    return (
        <div className="youtube-wraper">
            <div className="img thumb">
                <img src="https://youtube.com/@griseldanicahyanurzaman?si=Rx3AbTmnV_NAwnpi" alt=""/>
                <P className="time">7.12</P>
            </div>
            <P>image thumb here</P>
            <P>title here</P>
            <P>desc here</P>
        </div>
    )
 }

 export default YoutubeComp;
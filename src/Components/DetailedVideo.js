import React from 'react';
import { Link } from "react-router-dom";
import {useParams} from  "react-router-dom";

export function DetailedVideo() {
    const {videoId} = useParams();
    return (
        <div>
        <div>
            <iframe
                title="YouTube video"
                className="video-iframe"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            /> 
        </div>
        <Link to="/"><button className = "back-btn">Go Back</button></Link>
        </div>
    )
}
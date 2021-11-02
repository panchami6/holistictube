import React, {useState} from "react";
import { Link } from 'react-router-dom';
import {useCustomPlaylist} from "../Context/customPlaylist-context";
import { usePlaylist } from "../Context/playlist-context";
import axios from "axios";
import "./videoCard.css"
import { useAuth } from "../Context/auth-context";

export function VideoCard({video}){
    const { customPlaylistDispatch } = useCustomPlaylist();
    const {playlistDispatch} = usePlaylist();
    const {userId} = useAuth();
    const {_id, videoId, image, avatar, title, author, views} = video;
    const [Loader, setLoader] = useState(false);

    const watchLaterApi = `https://holistictubebackend.panchami6.repl.co/watchLater/${userId}`;

    const addtoWatchLater = async (video) => {
        try {
            setLoader(true);
            await axios.post(watchLaterApi, { _id, image, avatar, title, author, views, videoId });  
            playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: video })
            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.error(error);
        }
    }

    return(
        <div className = "video-card" key={videoId}>
            <Link style={{textDecoration:"none", color:"black"}} to={`/${videoId}`} 
                onClick = { () => {
                customPlaylistDispatch({type: "ADD_TO_HISTORY", payload: video})
                }}
            >
                <img style={{width:"242px", height:"150px"}} src={image} alt="ThumbNail" />
                <div style={{display:"flex"}} >
                    <div>
                        <img className = "video-avatar" src={avatar} alt="avatar" />
                    </div>
                    <div className = "video-details">
                        <h4 className = "video-title">{title}</h4>
                        <p>{author}</p>
                        <p>{views} views</p>
                    </div>
                </div>
            </Link>
            <button className = "watchlater-btn" onClick={() => addtoWatchLater(video)}
            >{Loader ? <i className="fa fa-spinner fa-spin"></i> : <i className="fas fa-clock"></i>}</button>
            <button className = "playlist-btn" onClick={() =>customPlaylistDispatch({ type: "SHOW_MODAL", payload: video})}><i className="fas fa-stream"></i></button>
        </div>
    )
}
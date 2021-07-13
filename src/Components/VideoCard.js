import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import {useCustomPlaylist} from "../Context/customPlaylist-context";
import { usePlaylist } from "../Context/playlist-context";
import axios from "axios";
import "./videoCard.css"
import { useAuth } from "../Context/auth-context";

export function VideoCard({video}){
    const { customPlaylistDispatch } = useCustomPlaylist();
    const { playlistDispatch} = usePlaylist();
    const {userId} = useAuth();
    const {_id, videoId, image, avatar, title, author, views} = video;

    const watchLaterApi = `https://holistictubebackend.panchami6.repl.co/watchLater/${userId}`;

    const addtoWatchLater = async (video) => {
        try {
            const response = await axios.post(watchLaterApi, { _id, image, avatar, title, author, views });  
            if(response) {
                playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: video })
            }
        } catch (error) {
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
            >Watch Later</button>
            <button className = "playlist-btn" onClick={() =>customPlaylistDispatch({ type: "SHOW_MODAL", payload: video})}>Add to Playlist</button>
        </div>
    )
}
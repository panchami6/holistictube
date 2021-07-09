import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import { useCustomPlaylist } from '../../Context/customPlaylist-context';
import axios from "axios";
import "./customplaylist.css"
import { useAuth } from '../../Context/auth-context';

export function CustomPlaylistCard({video, currentPlaylist}) {
    const {_id, videoId, image, title, author, description} = video;
    const {name, playlistId} = currentPlaylist;
    const {userId} = useAuth();
    const {customPlaylistDispatch} = useCustomPlaylist();
    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;


    const removeFromCustomPlaylist = async (playlistId, name, _id, videoId) => {
        try {
            await axios.delete(`${customPlaylistApi}/${playlistId}/${videoId}`);    
            customPlaylistDispatch({type: "REMOVE_FROM_PLAYLIST", payload: {name: name,_id: _id }})
        } catch (error) {
            console.error(error);
        }
    }

    return video ? (
        <div className = "card-playlist">
            <Link className = "card-link" to={`/${videoId}`} 
                onClick = { () => {
                customPlaylistDispatch({type: "ADD_TO_HISTORY", payload: video})
                }}
            >   
                <div className = "horizontal-card">
                    <img className="card-thumbnail" src={image} alt="ThumbNail" />
                    <div className = "card-details">
                        <h3>{title}</h3>
                        <p className = "card-author">{author}</p>
                        <p className = "card-description card-author">{description}</p>
                    </div>
                </div>
            </Link>
            <button className="playlist-btn-remove" onClick={() => removeFromCustomPlaylist(playlistId,name, _id, videoId)
            }><i className="fas fa-trash-alt"></i></button>
        </div>
    ) : (<div>No Videos</div>)
}

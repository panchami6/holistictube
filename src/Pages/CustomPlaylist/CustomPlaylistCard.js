import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { useCustomPlaylist } from '../../Context/customPlaylist-context';
import axios from "axios";
import "./customplaylist.css"
import { useAuth } from '../../Context/auth-context';

export function CustomPlaylistCard({video, currentPlaylist}) {
    const {_id, videoId, image, title, author, description} = video;
    const {name, playlistId} = currentPlaylist;
    const {userId} = useAuth();
    const {customPlaylistState, customPlaylistDispatch} = useCustomPlaylist();
    const {playlistVideos} = customPlaylistState;
    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;
    const [Loader, setLoader] = useState(false);

    useEffect(() => {
        (async function () {
          const response = await axios.get(`${customPlaylistApi}/${playlistId}/${name}`);
          const playlistData = response.data.videos;
        customPlaylistDispatch({type:"PLAYLIST_VIDEOS", payload: playlistData});
        })();
      }, [name, playlistId, Loader, customPlaylistDispatch, customPlaylistApi]);

    const removeFromCustomPlaylist = async (playlistId, name, _id, videoId) => {
        try {
            setLoader(true);
            await axios.delete(`${customPlaylistApi}/${playlistId}/${videoId}`);    
            customPlaylistDispatch({type: "REMOVE_FROM_PLAYLIST", payload: {name: name,_id: _id }})
            setLoader(false)
        } catch (error) {
            console.error(error);
        }
    }

    return playlistVideos !==[] ? (
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
            }>{Loader ? <i class="fa fa-spinner fa-spin"></i>: <i className="fas fa-trash-alt"></i>} </button>
        </div>
    ) : (<div>No Videos</div>)
}

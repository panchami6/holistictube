import React from 'react';
import {useState} from "react";
import { Link } from 'react-router-dom';
import { data } from "../../server";
import {usePlaylist} from '../../Context/playlist-context';
import {useCustomPlaylist} from "../../Context/customPlaylist-context";
import "./videocard.css";

// export const isVideoInWatchLater = (playlistVideo, id) => {
//     return playlistVideo.find((item) => item.id === id);
//   };

export default function VideoCard() {
    const [currentVideoId, setCurrentVideoId] = useState("");
    const [modal, setModal] = useState(false);
    const [userPlaylist, setUserPlaylist] = useState("");

    const { playlistDispatch} = usePlaylist();
    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist();

    const customPlaylistModal = (videoId) => {
        setModal(true);
        setCurrentVideoId(videoId)
    }

    const closeModal = () => {
        setModal(false);
    }
    
    const ModalShow = () => {
        return(
             <div className={`modalBackground modalShowing-${modal} `} >
                <div className="modal-inner">
                    <button className="modal-close-btn" onClick={()=> closeModal()}>X</button>
                    <h2>Create your Playlist</h2>
                    <div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className="modal-input"
                            key={currentVideoId}
                            value={userPlaylist} 
                            onChange = {(e) => setUserPlaylist(e.target.value)}
                            />
                            <button onClick={() => {
                                customPlaylistDispatch({
                                type: "ADD_NEW_PLAYLIST",
                                payload: { userPlaylist, setUserPlaylist }
                                }
                                )
                                console.log("created new playlist", userPlaylist);
                            }
                            }
                            disabled = {userPlaylist === "" ? true : false }
                           className="modal-btn" >Create</button>
                        </form>
                    </div>
                    <div>
                    {customPlaylistState.map(({playlistId, name, videos}) => {
                        return(
                            <div>
                                <input 
                                    type="checkbox"
                                    onChange = {() => customPlaylistDispatch({type:"ADD_TO_CUSTOM_PLAYLIST", payload:{playlistId,currentVideoId}})}
                                    checked = {videos.some((item) => item.currentVideoId === currentVideoId)}
                                 />
                                <div>{name}</div>
                            </div>
                            
                        )
                    }
                        
                    )}    
                    </div>
                </div>
            </div> 
        )
    }

    return (
        <div className = "video-page">
        {modal && <ModalShow />}
        <div className = "video-card-outer">
            {data.map((video) => {
                return(
                    <div className = "video-card" key={video.videoId}>
                        <Link style={{textDecoration:"none", color:"black"}} to={`/${video.videoId}`}>
                            <img style={{width:"250px", height:"150px"}} src={video.image} alt="ThumbNail" />
                            <div style={{display:"flex"}} >
                                <div style={{display:"flex"}}>
                                    <img style={{borderRadius:"50%", height:"40px"}} src={video.avatar} alt="avatar" />
                                </div>
                                <div style={{paddingLeft:"0.5rem", fontSize:"14px"}}>
                                    <h4 style={{ textAlign:"left"}}>{video.title}</h4>
                                    <div style={{textAlign:"left"}}>{video.author}</div>
                                    <div style={{textAlign:"left"}}>{video.views} views</div>
                                </div>
                            </div>
                        </Link>
                        <button className = "watchlater-btn" onClick={() =>{
                            console.log("videoId:", video.videoId)
                             playlistDispatch({ type: "ADD_TO_WATCH_LATER", payload: video })
                             console.log("Added to playlist", {video})
                        } 
                        }
                        >Watch Later</button>
                        <button className = "playlist-btn" onClick={() => customPlaylistModal(video.videoId)}>Add to Playlist</button>
                    </div>   
                )
            })}
        </div>
        </div>
    )
}
import SideBar from '../../Components/SideBar/SideBar';
import "../../Components/SideBar/sidebar.css";
import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import "./customplaylist.css";
import {Link} from "react-router-dom";

export const CustomPlaylist = () => {
    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist();

    console.log("playlists are", {customPlaylistState})
    return(
        <div className="playlist-page">
            <SideBar />
            <div className="playlist-list">
                {customPlaylistState.map((playlist) => (
                    <div className = "custom-playlist">
                    <div className="playlist-header">
                        <div className="playlist-name">{playlist.name}</div>
                        <div><button className = "playlist-remove-btn" onClick = {() => {customPlaylistDispatch({ type: "DELETE_PLAYLIST", payload: playlist })}}><i class="fas fa-trash-alt"></i></button></div>
                    </div>
                    <div className ="playlist-card-outer">
                    {playlist.videos.map((video) => {
                            return(
                                <div className="playlist-card">
                                    <Link style={{textDecoration:"none", color:"black"}} to={`/${video.currentVideoId}`}>
                                    <img style={{width:"250px", height:"150px"}} src={video.currentThumbnail} alt="ThumbNail" />
                                    <div style={{display:"flex"}} >
                                        <div style={{display:"flex"}}>
                                            <img style={{borderRadius:"50%", height:"40px"}} src={video.currentAvatar} alt="avatar" />
                                        </div>
                                        <div style={{paddingLeft:"0.5rem", fontSize:"14px"}}>
                                            <h4 style={{ textAlign:"left"}}>{video.currentTitle}</h4>
                                            <div style={{textAlign:"left"}}>{video.currentAuthor}</div>
                                        </div>
                                    </div>
                                    </Link> 
                                </div>
                                )
                     })}
                     </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}



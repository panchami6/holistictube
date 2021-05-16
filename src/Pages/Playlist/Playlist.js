import SideBar from '../../Components/SideBar/SideBar';
import {usePlaylist} from '../../Context/playlist-context';
import {Link} from "react-router-dom";
import "../../Components/VideoList/videocard.css";
import "./playlist.css";

export const Playlist = () => {
    const { playlistState, playlistDispatch } = usePlaylist();

    return (
        <div style={{display:"flex"}}>
            <SideBar />
            <div className="watch-later-card-outer">
            {playlistState.map((video) => {
                return(
                    <div className = "watch-later-card ">
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
                        <button className="watch-later-btn" onClick={() =>{
                             playlistDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video })
                             console.log("Removed from playlist", {video})
                        }
                        }>Remove</button>
                    </div>
                )   
            })}
            </div>
        </div>
    )
}
import SideBar from '../../Components/SideBar/SideBar';
import "../../Components/SideBar/sidebar.css";
import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import "./customplaylist.css";
import {Link} from "react-router-dom";
// import VideoCard from '../../Components/VideoList/VideoCard';

export const CustomPlaylist = () => {
    const { customPlaylistState } = useCustomPlaylist();

    console.log("playlists are", {customPlaylistState})
    return(
        <div>
            <SideBar />
            <div className="video-card-outer">
                {customPlaylistState.map((playlist) => (
                    
                    <div className = "custom-playlist">
                    {console.log("playlist in customPlaylist: ", playlist)}
                    <div>{playlist.name}</div>
                    {playlist.videos.map((video) => {
                        return(
                            <div>
                                <Link style={{textDecoration:"none", color:"black"}} to={`/${video.currentVideoId}`}>
                               <div>video</div>
                        </Link>
                            </div>
                        )
                    })}
                    {/* </Link> */}
                    <button className = "playlist-remove-btn">Delete</button>
                    </div>
                ))}
            </div> 
        </div>
    )
}

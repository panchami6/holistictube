import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import { Link } from "react-router-dom";
import {useEffect} from "react";

export function CustomPlaylistPage({playlist}){
    const { customPlaylistDispatch } = useCustomPlaylist();
    const playlistLength = playlist.videos.length;
    const {_id, name, videos} = playlist;

    useEffect(() => {
        customPlaylistDispatch( {type: "OPEN_CURRENT_PLAYLIST", payload: {_id, name, videos}} )
    }, [customPlaylistDispatch, _id, name, videos])
    
    return(
        <div style={{display:"flex"}} className = "playlists">
        <Link 
        className = "playlist-link" to={`/playlists/${playlist._id}`} 
        
            onClick={() => customPlaylistDispatch( {type: "OPEN_CURRENT_PLAYLIST", payload: {_id, name, videos}} )}
        >
            <h2 className = "playlist-name">{playlist.name}</h2> 
            <div className = "playlist-length">
            {playlistLength === 1  ? <div>{playlistLength} Video</div> : <div>{playlistLength} Videos</div>}
            </div>

        </Link> 
        </div>
    ) 
}
import { useEffect, useState } from "react";
import axios from "axios";
import { useCustomPlaylist } from "../Context/customPlaylist-context"
import { useAuth } from "../Context/auth-context";



export function PlaylistModal(){
    const [playlistName, setPlaylistName] = useState("");
    const {customPlaylistState, customPlaylistDispatch} = useCustomPlaylist();
    const { playlists, currentVideo, modalShow } = customPlaylistState;
    const {userId} = useAuth();
    // console.log(playlists)

    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;

    // const playlistExistsCheck = (userPlaylist) => {
    //     console.log(userPlaylist)
    //     return playlists.find(playlist => playlist.name === userPlaylist)
    // }

    useEffect(() => {
        (async function () {
          const response = await axios.get(customPlaylistApi);
          const playlistData = response.data.playlists;
        customPlaylistDispatch({type:"PLAYLISTS_DATA", payload: playlistData});
        })();
      }, [customPlaylistDispatch]);
    
    const addNewPlaylist = async (playlistName) => {
        if(playlists.find(playlist => playlist.name === playlistName)){
            return;
        } 
        try {
            await axios.post(customPlaylistApi, {name:playlistName});  
            customPlaylistDispatch({type:"CREATE_PLAYLIST", payload: playlistName})
        } catch (error) {
            console.error(error);
        }
    }

    const addtoCustomPlaylist = async (name, playlistId, currentVideoId, author, avatar, description, image, title, videoId) => {
        try {
            await axios.post(`${customPlaylistApi}/${playlistId}/${name}`, {currentVideoId, author, avatar, description, image, title, videoId});    
            customPlaylistDispatch({type: "ADD_TO_CUSTOM_PLAYLIST", name: name, currentVideoId: currentVideoId, currentVideo: currentVideo })
        } catch (error) {
            console.error(error);
        }
    }

    const removeFromCustomPlaylist = async (playlistId, name, _id) => {
        try {
            await axios.delete(`${customPlaylistApi}/${playlistId}/${_id}`);    
            customPlaylistDispatch({type: "REMOVE_FROM_PLAYLIST", payload: {name: name,_id: _id }})
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
         <div 
         className={`modalBackground modalShowing-${modalShow} `}
          >
            <div className="modal-inner">
                <button className="modal-close-btn" onClick={()=> customPlaylistDispatch({type:"HIDE_MODAL"})}>X</button>
                <h2>Create your Playlist</h2>
                <div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input className="modal-input"
                        value={playlistName} 
                        placeholder = "Enter Playlist Name..."
                        onChange = {(e) => setPlaylistName(e.target.value)}
                        />
                        <button onClick={() => addNewPlaylist(playlistName)}
                        disabled = {playlistName === ""  ? true : false }
                       className="modal-btn" >Create</button>
                    </form>
                </div>
                <div>

                {playlists && playlists.map(playlist => {
                    const {name} = playlist;
                    const playlistId = playlist._id;
                    const {_id, author, avatar, description, image, title, videoId} = currentVideo;
                    return(
                        <div>
                            <label>
                                <input 
                                name={playlist.name}
                                checked = { playlist.videos.find(video => video.videoId === videoId) }
                                type="checkbox"
                                onChange={ () => playlist.videos.find(video => video.videoId === videoId) ? removeFromCustomPlaylist(playlistId,name, _id) : addtoCustomPlaylist(name, playlistId, _id, author, avatar, description, image, title, videoId) }
                                />
                            {playlist.name}
                            </label>
                        </div>
                    )
                })} 
                </div>
            </div>
        </div> 
    )
}
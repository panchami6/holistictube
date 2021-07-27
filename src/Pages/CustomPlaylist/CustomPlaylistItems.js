import React, {useEffect} from 'react';
import SideBar from "../../Components/SideBar/SideBar";
import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import { CustomPlaylistCard } from "./CustomPlaylistCard";
import { useAuth } from '../../Context/auth-context';
import axios from "axios";

export function CustomPlaylistItems(){
    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist();
    const {currentPlaylist, playlistVideos} = customPlaylistState;
    const {name, playlistId} = currentPlaylist;
    console.log(name, playlistId)
    const {userId} = useAuth();
    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;

    useEffect(() => {
        (async function () {
        if(name && playlistId){
          const response = await axios.get(`${customPlaylistApi}/${playlistId}/${name}`);
          const playlistData = response.data.videos;
        customPlaylistDispatch({type:"PLAYLIST_VIDEOS", payload: playlistData})}
        })();
      }, [name, playlistId, customPlaylistDispatch, customPlaylistApi]);

    return(
        <div>
            <SideBar/>
            {playlistVideos!==[] ? (
                <div className = "custom-playlist-items">
                <h2 style={{paddingTop:"5rem", paddingBottom:"1rem"}}> { name } <span>({playlistVideos.length})</span></h2>
                { playlistVideos.map(video => {
                   return(
                    <CustomPlaylistCard video={video} currentPlaylist = {currentPlaylist} />
                   )
               })}
            </div> 
            ): (<div style = {{paddingTop:"5rem"}}>No Videos</div>)}
            
        </div>
    )
}
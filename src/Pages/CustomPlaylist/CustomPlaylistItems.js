import React, {useEffect} from 'react';
import SideBar from "../../Components/SideBar/SideBar";
import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import { CustomPlaylistCard } from "./CustomPlaylistCard";
import { useAuth } from '../../Context/auth-context';
import axios from "axios";

export function CustomPlaylistItems(){
    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist();
    const {currentPlaylist} = customPlaylistState;
    const {name, videos} = currentPlaylist;
    const {userId} = useAuth();
    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;

    useEffect(() => {
        (async function () {
          const response = await axios.get(customPlaylistApi);
          const playlistData = response.data.playlists;
        customPlaylistDispatch({type:"PLAYLISTS_DATA", payload: playlistData});
        })();
      }, [customPlaylistDispatch]);

    return(
        <div>
            <SideBar/>
            {videos ? (
                <div>
                <h1 style={{paddingTop:"5rem"}}> { name } </h1>
                { videos.map(video => {
                   return(
                    <CustomPlaylistCard video={video} currentPlaylist = {currentPlaylist} />
                   )
               })}
            </div> 
            ): (<div style = {{paddingTop:"5rem"}}>No Videos</div>)}
            
        </div>
    )
}
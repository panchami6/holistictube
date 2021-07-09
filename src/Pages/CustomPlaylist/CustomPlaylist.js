import React, { useEffect } from "react";
import SideBar from '../../Components/SideBar/SideBar';
import { useCustomPlaylist } from "../../Context/customPlaylist-context";
import { CustomPlaylistPage } from "./CustomPlaylistPage";
import axios from "axios";
import "./customplaylist.css";
import { useAuth } from "../../Context/auth-context";

export const CustomPlaylist = () => {
    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist();
    const {userId} = useAuth();
    const {playlists} = customPlaylistState;

    const customPlaylistApi = `https://holistictubebackend.panchami6.repl.co/playlists/${userId}`;

    useEffect(() => {
        (async function () {
          const response = await axios.get(customPlaylistApi);
          const playlistData = response.data.playlists;
        customPlaylistDispatch({type:"PLAYLISTS_DATA", payload: playlistData});
        })();
      }, [customPlaylistDispatch]);

    return(
        <div className="playlist-page">
            <SideBar />
            <h1 style ={{paddingTop:"5rem"}} className="page-title">Playlists</h1> 
            <div>
                {
                    playlists.map(playlist => {
                        return(
                            <CustomPlaylistPage playlist={playlist}/>
                        )
                    })
                }
                </div>
        </div>
    )
}

 


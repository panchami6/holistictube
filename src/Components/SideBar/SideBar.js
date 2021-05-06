import React from 'react';
import {Link} from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
    return (
        <div>
        <div className = "sidebar-component">
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/"><i class="fas fa-home"></i> Home </Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/Playlist"><i class="fas fa-clock"></i> Watch Later </Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/CustomPlaylist"><i class="fas fa-stream"></i> Playlists </Link></div>
        </div>
        <div className = "separator"></div>
        </div>
    )
}






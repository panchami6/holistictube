import React from 'react';
import {Link} from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
    return (
        <div>
        <div className = "sidebar-component">
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/"><i className="fas fa-home"></i> Home </Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/Playlist"><i className="fas fa-clock"></i> Watch Later </Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color:"black", paddingBottom:"1rem"}} to ="/CustomPlaylist"><i className="fas fa-stream"></i> Playlists </Link></div>
        </div>
        <div className = "separator"></div>
        </div>
    )
}






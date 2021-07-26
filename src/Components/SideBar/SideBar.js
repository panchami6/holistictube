import React from 'react';
import {Link} from "react-router-dom";
import "./sidebar.css";

export default function SideBar() {
    return (
        <div>
        <div className = "sidebar-component">
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color: "black", paddingBottom:"1rem"}} to ="/"><i className="fas fa-home"></i> <span className = "sidebar-label">Home</span> </Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none",color: "black", paddingBottom:"1rem"}} to ="/watchLater"><i className="fas fa-clock"></i> <span className = "sidebar-label">Watch Later</span></Link></div>
            <div className = "sidebar-link"><Link style={{textDecoration:"none", color: "black", paddingBottom:"1rem"}} to ="/playlist"><i className="fas fa-stream"></i> <span className = "sidebar-label">Playlists</span></Link></div>
        </div>
        <div className = "separator"></div>
        </div>
    )
}






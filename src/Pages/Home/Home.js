import React from 'react';
import VideoList from '../../Components/VideoList/VideoList';
import SideBar from "../../Components/SideBar/SideBar";
import "./home.css";

export default function Home() {
    return (
        <div className = "home-components">
            <SideBar />
            <VideoList /> 
        </div>
    )
}

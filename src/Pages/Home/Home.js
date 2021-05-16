import React from 'react';
import VideoCard from '../../Components/VideoList/VideoCard';
import SideBar from "../../Components/SideBar/SideBar";
import {Search} from "../../Components/Search/Search"
import "./home.css";

export default function Home() {
    return (
        <div className = "home-components">
            <SideBar />
            <div>
                {/* <Search /> */}
                <VideoCard />
            </div> 
        </div>
    )
}

import React from 'react';
import {useState, useEffect} from "react";
import {useCustomPlaylist} from "../../Context/customPlaylist-context";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./videoList.css";
import { VideoCard } from '../VideoCard';
import { PlaylistModal } from '../PlaylistModal';

export default function VideoList() {
    const [showVideos, setShowVideos] = useState([]);
    const [loader, setLoader] = useState(false); 
    const { customPlaylistState } = useCustomPlaylist();
    const {modalShow} = customPlaylistState;

    const videosApi = "https://holistictubebackend.panchami6.repl.co/videos";

    useEffect(() => {
        (async function () {
          setLoader(true);
          const response = await axios.get(videosApi);
          setLoader(false);
          setShowVideos(response.data.videos);
        })();
      }, []);
    

    return (
        <div className = "video-page">
        {modalShow? <PlaylistModal /> : (
        <div 
        className = "video-card-outer">
        {loader && <Loader type="ThreeDots" color="#AF0F0F" height={80} width={80} style={{paddingLeft:"30rem"}} />}
            {showVideos.map((video) => {
                return(
                    <VideoCard key={video._id} video={video}/>
                )
            })}
        </div>
        )}
        </div>
    )
}
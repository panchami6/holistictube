import SideBar from '../../Components/SideBar/SideBar';
import {usePlaylist} from '../../Context/playlist-context';
import {Link} from "react-router-dom";
import "../../Components/VideoList/videoList.css";
import "./playlist.css";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useAuth } from '../../Context/auth-context';

export const Playlist = () => {
    const { playlistState, playlistDispatch } = usePlaylist();
    const { watchLater } = playlistState;
    const {userId} = useAuth();
    const watchLaterApi = `https://holistictubebackend.panchami6.repl.co/watchLater/${userId}`;
    const [Loader, setLoader] = useState(false);
    const [loaderId, setLoaderId] = useState("");

    useEffect(() => {
        (async function () {
          const response = await axios.get(watchLaterApi);
          const watchLaterData = response.data.watchLater;
          playlistDispatch({type:"WATCH_LATER_DATA", payload: watchLaterData});
        })();
      }, [Loader, playlistDispatch, watchLaterApi]);

    const deleteFromWatchLater = async (video) => {
        try {
                setLoader(true);
                setLoaderId(video._id)
                await axios.delete(`${watchLaterApi}/${video._id}`);   
                playlistDispatch({ type: "REMOVE_FROM_WATCH_LATER", payload: video._id })
                setLoader(false);
                setLoaderId("")
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style = {{display:"flex"}}>
            <SideBar />
            <div>
            <h2 className = "watch-later-heading">Watch Later</h2>
            <div className="watch-later-card-outer">
            {(watchLater && watchLater.videos) ? (
                <div className = "watch-later-grid">
                {watchLater.videos.map((video) => {
                return(
                    <div className = "watch-later-card ">
                    <Link style={{textDecoration:"none", color:"black"}} to={`/${video.videoId}`}>
                        <img style={{width:"250px", height:"150px"}} src={video.image} alt="ThumbNail" />
                        <div style={{display:"flex"}} >
                            <div style={{display:"flex"}}>
                                <img style={{borderRadius:"50%", height:"40px"}} src={video.avatar} alt="avatar" />
                            </div>
                            <div style={{paddingLeft:"0.5rem", fontSize:"14px"}}>
                                <h4 style={{ textAlign:"left"}}>{video.title}</h4>
                                <div style={{textAlign:"left"}}>{video.author}</div>
                                <div style={{textAlign:"left"}}>{video.views} views</div>
                            </div>
                        </div>
                    </Link>
                        <button className="watch-later-btn" onClick={() => deleteFromWatchLater(video)}>{(Loader && loaderId === video._id) ? <i class="fa fa-spinner fa-spin"></i> : <i className="fas fa-trash-alt"></i>}</button>
                    </div>
                )   
            })}
                </div>
            ) : (<h3 style = {{marginLeft: "30rem", marginTop:"12rem"}}>No Videos</h3>)}
            </div>
            </div>
        </div>
    )
}
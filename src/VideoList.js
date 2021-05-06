// import React from 'react';
// import { data } from "./server";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import {useVideo} from "./video-context";

    

// export default function VideoList({children, id}) {
    // const { videos } = useVideo();
    // const navigate = useNavigate();
    // const playVideo = (videoId) => {
    //     navigate(`/${videoId}`);
    // }
    // return (
    //     <div style={{display:"flex", flexWrap:"wrap"}}>
    //         {data.map((video)=>{
    //             return(
    //                     {/* <Link to = "/DetailedVideo" > */}
    //                     <div style={{border:"1px solid gray", width:"300px", margin:"1rem"}}>
    //                             <img
    //                              onClick = {() => playVideo(video.videoId)}
    //                             //   {() => DetailedVideo(video.videoId)} 
    //                               style={{height:"180px", width:"300px", cursor:"pointer"}} src={video.image} alt="Thumbnail" />
    //                         <h4>{video.title}</h4>
    //                         <div>{video.author}</div>
    //                         <div>{video.views} Views</div>
    //                     </div>
    //                     {/* </Link> */}
    //             )
    //         })}
    //     </div>
    // )

//     return (
//         <div style={{display:"flex", flexWrap:"wrap"}}>
//             {data.map((video) => {
//                 return(
//                     <div style={{border:"1px solid gray", width:"300px", margin:"1rem"}}>
//                         <img src={video.image} alt="ThumbNail" />
//                         <h4>{video.title}</h4>
//                         <div>{video.author}</div>
//                         <div>{video.views}</div>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }






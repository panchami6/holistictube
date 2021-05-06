// import { Link } from "react-router-dom";
// import { useVideo } from "./video-context";
// // import { AddToPlaylist } from "../Playlist/AddToPlaylist";

// const imageURL = (videoId) =>`http://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

// const videoURL = (videoId) => `https://www.youtube.com/watch?v=${videoId}`;

// export const VideoCard = ({ vid }) => {
//   const {
//     state: { videoList },
//     dispatch,
//   } = useVideo();

//   const { title, author, image } = videoList.find(
//     (video) => video.vid === vid
//   );

//   return (
//     <div>
//       <Link to={`/${vid}`} onClick={() => dispatch({type:"ADD_TO_HISTORY",payload:vid})}>
//       <img
//         alt="youtube video"
//         src={imageURL(vid)}
//       />
//       <div>
//         <img alt="author" src={image} />
//         <div>
//         <b>{title}</b>
//         </div>
//       </div>
//       <small>{author}</small>
//       </Link>
//       {/* <small>
//         <i
//           onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: vid })}
//           className={
//             videoExists(likedVideos, vid)
//               ? "fas fa-thumbs-up primaryBg-txt"
//               : "fas fa-thumbs-up"
//           }
//         ></i>
//       <AddToPlaylist vid={vid}/>
//       </small> */}
//     </div>

//   );
// };
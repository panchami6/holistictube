import { createContext, useContext, useReducer } from "react";
// import { data } from "./server";
import { videoReducer } from "../Reducer/video-reducer";
// import {PLAY_VIDEO} from "../Reducer/video-reducer";


// const initialState = {
//   videoList:[],
//   likedVideos:[],
//   history:[],
//   playlist:[
//     {
//       listId: 1,
//       name:"Watch Later",
//       videos: []
//     }
//   ],
//   toastMsg: "",
//   searchValue:""
// };




// export const VideoProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(videoReducer,initialState)

//   const playVideo = (videoId) => {
//     dispatch({
//         type:PLAY_VIDEO,
//         payload:videoId
//     })
// }
//   return (
//     <VideoContext.Provider value={{videoList: state.videoList, playVideo}}>
//       {children}
//     </VideoContext.Provider>
//   );
// };

// export const useVideo = () => useContext(VideoContext);


export const VideoContext = createContext();


const initialState = {
    videoList:[],
    likedVideos:[],
    history:[],
    playlist:[
      {
        listId: 1,
        name:"Watch Later",
        videos: []
      }
    ],
    toastMsg: "",
    searchValue:""
  };
  
  export const VideoProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(videoReducer,initialState);
  
    return (
      <VideoContext.Provider value={{ state, dispatch }}>
        {children}
      </VideoContext.Provider>
    );
  };

export const useVideo = () => useContext(VideoContext);


import { createContext, useContext, useReducer } from "react";
import customPlayListReducer from "../Reducer/customPlaylist-reducer";

export const CustomPlaylistContext = createContext();

export function CustomPlaylistProvider({ children }) {
    const [customPlaylistState, customPlaylistDispatch] = useReducer(customPlayListReducer, 
      { modalShow : false, currentVideo: "", playlistName: "", playlists: [{name:"", videos:[]}], currentPlaylist: "" },
    );
  return (
    <CustomPlaylistContext.Provider value={{ customPlaylistState, customPlaylistDispatch }}>
      {children}
    </CustomPlaylistContext.Provider>
  );
}

export function useCustomPlaylist() {
  return useContext(CustomPlaylistContext);
}
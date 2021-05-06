import { createContext, useContext, useReducer } from "react";
import customPlayListReducer from "../Reducer/customPlaylist-reducer";
import { v4 as uuid } from "uuid";

export const CustomPlaylistContext = createContext();

export function CustomPlaylistProvider({ children }) {
    const [customPlaylistState, customPlaylistDispatch] = useReducer(customPlayListReducer, [
        {
          playlistId: uuid(),
          name: "My Playlist",
          videos: [],
        },
      ]);
  return (
    <CustomPlaylistContext.Provider value={{ customPlaylistState, customPlaylistDispatch }}>
      {children}
    </CustomPlaylistContext.Provider>
  );
}

export function useCustomPlaylist() {
  return useContext(CustomPlaylistContext);
}
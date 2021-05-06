import { createContext, useContext, useReducer } from "react";
import playlistReducer from "../Reducer/playlist-reducer";

export const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, []);
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
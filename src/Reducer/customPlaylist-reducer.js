import { v4 as uuid } from "uuid";
// import { Playlist } from "../Pages/Playlist/Playlist";

const customPlayListReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NEW_PLAYLIST":
      payload.setUserPlaylist("");
      return [
        ...state,
        { playlistId: uuid(), name: payload.userPlaylist, videos: [] },
      ];

    case "ADD_TO_CUSTOM_PLAYLIST":
      return state.map((playlist) => {
        if (playlist.playlistId === payload.playlistId) {
          console.log("playlist in reducer1", playlist)
          if(playlist.videos.some((item) => item.currentVideoId === payload.currentVideoId)){
            console.log("playlist in reducer2", playlist)
            const videos = playlist.videos.filter((item) => item.currentVideoId !== payload.currentVideoId);
            return { ...playlist, videos };
          }
          return {
                ...playlist,
                videos: [...playlist.videos, { ...payload }],
              };
        }
        return playlist;
    });

    case "DELETE_PLAYLIST":
      return state.filter((playlist) => playlist.playlistId !== payload.playlistId);

    // case "REMOVE":
    //   payload.setDeleteModalVisibility("hide");
    //   return state.map((playlist) => {
    //     if (playlist.playlistId === payload.playlistId) {
    //       if (playlist.videos.some((item) => item.v_id === payload.v_id)) {
    //         const videos = playlist.videos.filter(
    //           (item) => item.v_id !== payload.v_id
    //         );
    //         return { ...playlist, videos };
    //       }
    //       return playlist;
    //     }
    //     return playlist;
    //   });

    default:
      return state;
  }
};
export default customPlayListReducer;
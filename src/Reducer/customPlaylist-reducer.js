const customPlayListReducer = (state, { type, payload, name, currentVideo }) => {
  switch (type) {
    case "PLAYLISTS_DATA":
        return {...state, playlists: payload};

    case "SHOW_MODAL":
      return { ...state, modalShow: true, currentVideo: payload };

    case "HIDE_MODAL":
        return { ...state, modalShow: false};

    case "PLAYLIST_NAME":
        return { ...state, playlistName: payload}

    case "CREATE_PLAYLIST":
      return{
        ...state, playlists: [{...state.playlists, name:payload, videos:[]}]
      }

    case "OPEN_CURRENT_PLAYLIST":
      return { 
        ...state, currentPlaylist: {...state.currentPlaylist, name: payload.name, playlistId: payload._id, videos: payload.videos}
      }

    case "ADD_TO_CUSTOM_PLAYLIST":
      return { 
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist.name !== name
            ? playlist
            : { ...playlist, name:playlist.name, videos: [{...playlist.videos, currentVideo}]}
        )
    };

    case "REMOVE_FROM_PLAYLIST":
      return{
        ...state,
        playlists: state.playlists.map((playlist) => {
          return playlist.name !== payload.name
            ? playlist
            : {...playlist,
                videos: [playlist.videos.filter(_id => _id !== payload._id)]
              };
        }),
    }

    default:
      return {...state};
  }
};
export default customPlayListReducer;
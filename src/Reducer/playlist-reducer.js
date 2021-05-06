const playlistReducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TO_WATCH_LATER":
        if (state.some((video) => video.videoId === payload.videoId)) {
          return state;
        }
        return [...state, { ...payload }];
  
      case "REMOVE_FROM_WATCH_LATER":
        return state.filter((video) => video.videoId !== payload.videoId);
  
      default:
        return state;
    }
  };
  export default playlistReducer;
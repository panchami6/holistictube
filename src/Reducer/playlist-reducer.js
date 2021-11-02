const playlistReducer = (state, { type, payload }) => {
    switch (type) {
      case "WATCH_LATER_DATA":
        return {...state, watchLater: payload};

      case "ADD_TO_WATCH_LATER":
        return {...state, watchLater: [state.watchLater, payload] };
  
      case "REMOVE_FROM_WATCH_LATER":
        return {...state, watchLater: [state.watchLater, state.watchLater.videos.filter(video => video._id!==payload)]}
  
      default:
        return [...state, ...payload];
    }
  };
  export default playlistReducer;

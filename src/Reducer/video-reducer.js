// import { Action } from "history";

export const PLAY_VIDEO = "PLAY_VIDEO";

export const videoReducer = (state, action) => {
    switch (action.type) {
        case PLAY_VIDEO:
          return { ...state,
            videoList: state.videoList.filter(video => video.id === action.payload)};
        default:
          return state;
    }
  }
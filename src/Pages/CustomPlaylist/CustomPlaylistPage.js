import React from 'react';
import {useCustomPlaylist} from "../../Context/customPlaylist-context"

export function CustomPlaylistPage() {

    const { customPlaylistState, customPlaylistDispatch } = useCustomPlaylist(); 
    console.log("playlist id", {customPlaylistState})
    // const playlist = customPlaylistState.find((item) => item.currentPlaylistId === currentPlaylistId);

    return(
        <div>
            {/* {playlist.videos.map(({ videoId, title, channel }) => (
          <VideoList
            key={v_id}
            v_id={v_id}
            title={title}
            channel={channel}
            onOptionClick={handleOptionClick}
          />
            ))} */}
        </div>
    )
}

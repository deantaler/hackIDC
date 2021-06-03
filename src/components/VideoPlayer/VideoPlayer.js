import React from "react"
import VideoPlayerStyles from "./VideoPlayer.module.scss"
import ReactPlayer from "react-player/lazy"
const VideoPlayer = ({ url }) => {
  const config = {
    youtube: {
      playerVars: {
        showinfo: 0,
        autoplay: 1,
        controls: 0,
        playsinline: 1,
        mute: 1,
      },
    },
  }
  {
    /* <div className={VideoPlayerStyles.blocker}></div> */
  }
  return (
    <div className={VideoPlayerStyles.player}>
      <ReactPlayer url={url} config={config} />
    </div>
  )
}
export default VideoPlayer

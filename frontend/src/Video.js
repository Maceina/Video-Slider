import React from "react";
import "./Video.css";

function Video() {
  return (
    <div className="video">
      <video
        autoPlay muted
        className="video__player"
        loop
        src="https://ak.picdn.net/shutterstock/videos/1045042513/preview/stock-footage-wild-horses-running-slow-motion.webm"
      ></video>
    </div>
  );
}

export default Video;

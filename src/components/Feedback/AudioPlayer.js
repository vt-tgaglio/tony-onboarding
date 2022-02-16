import React from "react";

const AudioPlayer = ({ audioSource }) => {
  return (
    <div className="audio-player-container">
      <audio
        className="audio-player"
        data-test-id="audio-player"
        controls
        src={audioSource}
      >
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};
export default AudioPlayer;

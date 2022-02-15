import React from "react";

const AudioPlayer = ({ audioSource }) => {
  return (
    <div>
      <audio controls src={audioSource}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};
export default AudioPlayer;

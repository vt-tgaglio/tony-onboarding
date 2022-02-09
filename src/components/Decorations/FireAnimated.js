import React from "react";

const FireAnimated = ({ style }) => {
  return (
    <div className="animate__animated animate__fadeIn" style={{ ...style }}>
      <img src="./assets/img/fire.gif" />
    </div>
  );
};

export default FireAnimated;

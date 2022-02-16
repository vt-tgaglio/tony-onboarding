import React from "react";

const FireAnimated = ({ style }) => {
  return (
    <div
      className="fire-animated"
      data-test-id="fire-animated"
      style={{ ...style }}
    >
      <img alt="" src="./assets/img/fire.gif" />
    </div>
  );
};

export default FireAnimated;

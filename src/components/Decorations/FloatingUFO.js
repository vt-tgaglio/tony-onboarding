import React from "react";
import FloatingConsoles from "./FloatingConsoles";

const FloatingUFO = ({ object }) => {
  const containerStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    color: "red",
    width: "100%",
  };
  let imageStyles = {
    width: "15%",
    position: "absolute",
    top: 0,
  };
  let ufoSrc;
  if (object === "xbox") {
    ufoSrc = "./assets/img/xbox-ufo.png";
    imageStyles = { ...imageStyles, left: 0 };
  } else if (object === "playstation") {
    ufoSrc = "./assets/img/playstation-ufo.png";
    imageStyles = { ...imageStyles, right: 0 };
  } else {
    return null;
  }
  return (
    <div className="floating-ufo" style={containerStyles}>
      <img
        className="animate__animated animate__fadeIn"
        style={imageStyles}
        src={ufoSrc}
        alt=""
      />
      <FloatingConsoles object={object} />
    </div>
  );
};

export default FloatingUFO;

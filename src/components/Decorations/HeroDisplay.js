import React from "react";
import TransparentHeroImage from "./TransparentHeroImage";
import Slide from "@mui/material/Slide";
import FireAnimated from "./FireAnimated";

const HeroDisplay = () => {
  const containerStyles = {
    color: "black",
    background: "transparent",
    // background: "red",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: "0",
    pointerEvents: "none",
    overflow: "hidden",
  };
  const fireContainerStyles = {
    position: "absolute",
    bottom: "-50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={containerStyles}>
      <TransparentHeroImage
        position="left"
        heroImg="./assets/img/xbox-character.png"
      />
      <TransparentHeroImage
        position="right"
        heroImg="./assets/img/playstation-character.png"
        delay="1"
      />
      <div style={fireContainerStyles}>
        <FireAnimated
          style={{
            filter: "hue-rotate(105deg) brightness(1.2)",
            transform: "scaleX(-1)",
          }}
        />
        <FireAnimated
          style={{ filter: "hue-rotate(172deg) brightness(1.2)" }}
        />
      </div>
    </div>
  );
};

export default HeroDisplay;

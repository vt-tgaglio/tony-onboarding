import React from "react";
import TransparentHeroImage from "./TransparentHeroImage";
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
    zIndex: 2,
  };
  const fireContainerStyles = {
    position: "absolute",
    bottom: "-50px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div className="hero-display" style={containerStyles}>
      <TransparentHeroImage
        position="left"
        heroImg="./assets/img/xbox-character.png"
      />
      <TransparentHeroImage
        position="right"
        heroImg="./assets/img/playstation-character.png"
        delay="1"
      />
      <div
        className="animate__animated animate__fadeIn animate__delay2s"
        style={fireContainerStyles}
      >
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

import React from "react";
import HeroDisplay from "./Decorations/HeroDisplay";
import FormContainer from "./FormContainer";
import ScanningPanel from "./Panels/ScanningPanel";

const Container = (props) => {
  const containerStyles = {
    height: "calc(100vh - 55px)",
    background: "url(./assets/img/xbox-playstation-background.png)",
    backgroundColor: "black",
    backgroundSize: "cover",
    // background: "url(./grid.svg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundPosition: "var(--x) var(--y)",
  };
  const handleMouseMove = (e) => {
    const strength = 0.05;
    const moveX = -e.pageX * strength * 0.5 + "px";
    const moveY = -e.pageY * strength + "px";
    // Update the css variables
    document.documentElement.style.setProperty("--x", moveX);
    document.documentElement.style.setProperty("--y", moveY);
  };
  return (
    <div
      className="moving-background"
      onMouseMove={handleMouseMove}
      style={containerStyles}
    >
      {!props.isScanning && (
        <FormContainer file={props.file} onScanImage={props.onScanImage} />
      )}
      {props.isScanning && (
        <ScanningPanel
          file={props.file}
          onDoneScanning={props.onDoneScanning}
        />
      )}
      <HeroDisplay />
    </div>
  );
};

export default Container;

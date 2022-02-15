import React from "react";
import { xboxGreen } from "../../styles/colors";
import EngineButton from "../Buttons/EngineButton";
import EnginePanelArt from "../Decorations/EnginePanelArt";

const EnginePanel = ({
  actionLabel,
  buttonText,
  descriptionText,
  onSelectEngine,
  engine,
}) => {
  const enginePanelStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRight: "2px solid rgb(135 255 94 / 17%)",
    padding: "50px",
    width: "50%",
    background: `url("./assets/img/grid-background.png")`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  const engineLabelStyles = {
    color: xboxGreen,
    background: "black",
    padding: "5px 10px",
    marginBottom: "2px",
  };
  const descriptionStyles = {
    textAlign: "center",
    color: "black",
    background: xboxGreen,
    padding: "5px 10px",
  };
  return (
    <div className="engine-panel" style={enginePanelStyles}>
      <EnginePanelArt engine={engine} />
      <h1 style={engineLabelStyles}>{actionLabel}</h1>
      <h2 style={descriptionStyles}>{descriptionText}</h2>
      <EngineButton onClick={onSelectEngine} />
    </div>
  );
};

export default EnginePanel;

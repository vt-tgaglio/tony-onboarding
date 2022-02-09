import React from "react";
import HeroDisplay from "./Decorations/HeroDisplay";
import FormContainer from "./FormContainer";
const Container = (props) => {
  const containerStyles = {
    height: "calc(100vh - 55px)",
    background: "url(./assets/img/xbox-playstation-background.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // background: "url(./grid.svg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyles}>
      <FormContainer file={props.file} />
      <HeroDisplay />
    </div>
  );
};

export default Container;

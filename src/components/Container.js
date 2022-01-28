import React from "react";
import FormContainer from "./FormContainer";

const Container = (props) => {
  const containerStyles = {
    height: "calc(100vh - 55px)",
    background: "url(./grid.svg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={containerStyles}>
      <FormContainer file={props.file} />
    </div>
  );
};

export default Container;

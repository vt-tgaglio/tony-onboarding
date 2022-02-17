import React from "react";

const FloatingConsoles = ({ object }) => {
  if (!object) return null;
  const renderConsoles = () => {
    const style = {
      width: "200px",
      position: "absolute",
      top: "400px",
    };
    if (object === "xbox") {
      return (
        <img
          className="floating-console"
          style={{ ...style, left: "80px", top: "300px" }}
          src="./assets/img/xbox-transparent.png"
          alt="Xbox"
          data-test-id="floating-xbox"
        />
      );
    } else if (object === "playstation") {
      return (
        <img
          className="floating-console"
          style={{ ...style, right: "80px" }}
          src="./assets/img/playstation-transparent.png"
          alt="PlayStation"
          data-test-id="floating-playstation"
        />
      );
    }
    return null;
  };
  return (
    <div className="floating-consoles" data-test-id="floating-consoles">
      {renderConsoles()}
    </div>
  );
};

export default FloatingConsoles;

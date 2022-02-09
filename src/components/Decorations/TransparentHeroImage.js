import React from "react";
class TransparentHeroImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const containerStyles = {
      width: "20%",
      display: "flex",
      alignItems: "flex-end",
      zIndex: 1,
      justifyContent:
        this.props.position === "left" ? "flex-start" : "flex-end",
    };
    const imgStyles = {
      width: "350px",
      maxWidth: "100%",
      pointerEvents: "none",
    };
    let fadeInClass =
      this.props.position === "left"
        ? "animate__animated animate__fadeInLeft"
        : "animate__animated animate__fadeInRight";
    if (this.props.delay) {
      fadeInClass += ` animate__delay-${this.props.delay}s`;
    }
    return (
      <div style={containerStyles}>
        <img
          className={fadeInClass}
          style={imgStyles}
          src={this.props.heroImg}
        />
      </div>
    );
  }
}
// const TransparentHeroImage = ({ position, heroImg }) => {
//   const containerStyles = {
//     width: "20%",
//     display: "flex",
//     alignItems: "flex-end",
//     justifyContent: position === "left" ? "flex-start" : "flex-end",
//   };
//   const imgStyles = {
//     width: "350px",
//     maxWidth: "100%",
//     pointerEvents: "none",
//   };
//   return (
//     <div style={containerStyles}>
//       <img style={imgStyles} src={heroImg} />
//     </div>
//   );
// };
export default TransparentHeroImage;

import React from "react";

const ColorfulMessage = (props) => {
  console.log("カラフル");
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSiza: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;

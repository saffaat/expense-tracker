import React from "react";

import "./Button.css";

const Button = (props) => {
  const text = props.text;
  return <button onClick={props.onButtonClick}>{text}</button>;
};

export default Button;

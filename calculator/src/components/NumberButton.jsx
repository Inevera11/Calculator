import React from "react";
import { Button } from "evergreen-ui";

const NumberButton = ({ item, text, setText }) => {
  return <Button onClick={() => setText(text + item)}>{item}</Button>;
};

export default NumberButton;

import React from "react";
import { Button } from "evergreen-ui";

const NumberButton = ({ item, onClick }) => {
  return <Button onClick={onClick}>{item}</Button>;
};

export default NumberButton;

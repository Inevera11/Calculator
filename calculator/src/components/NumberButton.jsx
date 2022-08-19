import React from "react";
import { Button } from "evergreen-ui";

const NumberButton = ({ item }) => {
  return <Button onClick={() => console.log({ item })}>{item}</Button>;
};

export default NumberButton;

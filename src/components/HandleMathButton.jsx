import { Compute } from "./Compute";

const HandleMathButton = (operation, value1, value2) => {
  if (operation !== "") {
    if (value2 === "") return value1;
    else {
      return Compute(
        operation,
        parseFloat(value1, 10) ? parseFloat(value1, 10) : 0,
        parseFloat(value2, 10) ? parseFloat(value2, 10) : 0
      );
    }
  }
};

export default HandleMathButton;

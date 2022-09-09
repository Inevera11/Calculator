export const OperationButton = (sign, value1, value2) => {
  if (value2 && value1) {
    let result;
    switch (sign) {
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value2 - value1;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value2 / value1;
        break;
      case "%":
        result = value2 % value1;
        break;
      default:
        console.log("default");
        break;
    }
    return result;
  } else console.log("else");
};

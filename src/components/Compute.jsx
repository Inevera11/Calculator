export const Compute = (operation, value1, value2) => {
  let result;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value2 - value1;
      break;
    case "x":
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
};

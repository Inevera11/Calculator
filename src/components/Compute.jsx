export const Compute = (operation, value1, value2) => {
  let result;
  switch (operation) {
    case "+":
      result = value1 + value2;
      console.log({ value1 }, { operation }, { value2 }, "=", { result });
      break;
    case "-":
      result = value2 - value1;
      console.log({ value1 }, { operation }, { value2 }, "=", { result });
      break;
    case "x":
      result = value1 * value2;
      console.log({ value1 }, { operation }, { value2 }, "=", { result });
      break;
    case "/":
      result = value2 / value1;
      console.log({ value1 }, { operation }, { value2 }, "=", { result });
      break;
    case "%":
      result = value2 % value1;
      console.log({ value1 }, { operation }, { value2 }, "=", { result });
      break;
    default:
      console.log("default");
      break;
  }
  return result;
};

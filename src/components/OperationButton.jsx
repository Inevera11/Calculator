export const OperationButton = ({}) => {
  let result;
  switch (sign) {
    case "+":
      result = currNumber + prevNumber;
      break;
    case "-":
      result = prevNumber - currNumber;
      break;
    case "*":
      result = currNumber * prevNumber;
      break;
    case "/":
      result = prevNumber / currNumber;
      break;
    case "%":
      result = prevNumber % currNumber;
      break;
    default:
      console.log("default");
      break;
  }
  return result;
};

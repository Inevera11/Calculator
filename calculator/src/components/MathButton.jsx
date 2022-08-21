import { Button } from "evergreen-ui";

const MathButton = ({ item, onClick }) => {
  return <Button onClick={onClick}>{item}</Button>;
};

export default MathButton;

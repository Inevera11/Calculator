import { Button } from "evergreen-ui";

const WorkingButton = ({ item, pressed }) => {
  return <Button onClick={pressed}>{item}</Button>;
};

export default WorkingButton;

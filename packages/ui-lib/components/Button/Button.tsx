import { styled } from "@mui/material";

const Child = styled("div")`
  color: red;
`;

const Parent = styled("div")`
  ${Child} {
    color: green;
  }
`;

export const Button = () => {
  return (
    <div>
      <Parent>
        <Child>Green UI-lib button</Child>
      </Parent>
      <Child>Red UI-lib button</Child>
    </div>
  );
};

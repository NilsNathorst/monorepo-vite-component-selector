import { Button as UiButton } from "ui-lib/components";
import { styled } from "@mui/material";

const Child = styled("div")`
  color: red;
`;

const Parent = styled("div")`
  ${Child} {
    color: green;
  }
`;

const Button = () => {
  return (
    <div>
      <Parent>
        <Child>Green Craco button</Child>
      </Parent>
      <Child>Green Craco button</Child>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* Works */}
      <Button />
      {/* Also works */}
      <UiButton />
    </div>
  );
}

export default App;

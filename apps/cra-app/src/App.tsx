import { Button as UiButton } from "ui-lib";
import { styled } from "@mui/material";

const Child = styled("div")`
  color: red;
`;

const Parent = styled("div")`
  ${Child} {
    color: green;
  }
`;
// TODO:
// Add Craco
// Add @emotion/babel-plugin

const Button = () => {
  return (
    <div>
      <Parent>
        <Child>Green because I am inside a Parent</Child>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>
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

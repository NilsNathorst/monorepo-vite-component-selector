import "./App.css";
import { Button as UiButton } from "ui-lib";
import { styled } from "@mui/material/styles";

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
        <Child>Green because I am inside a Parent</Child>
      </Parent>
      <Child>Red because I am not inside a Parent</Child>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Button />
    </div>
  );
}

export default App;

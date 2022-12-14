import "./App.css";
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

const Button = () => {
  return (
    <div>
      <Parent>
        <Child>Green Vite button</Child>
      </Parent>
      <Child>Green Vite button</Child>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* Works */}
      <Button />
      {/* Doesn't work */}
      <UiButton />
    </div>
  );
}

export default App;

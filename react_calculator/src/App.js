import { useState } from "react";

export default function App() {
  return <Calculatice />;
}

function Calculatice() {
  const [result, setResult] = useState("");
  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearResult = () => {
    setResult("");
  };
  const calculate = (event) => {
    // setResult(eval(result).toString());
    console.log(event);
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <input
          type="text"
          id="mainInput"
          value={result}
          placeholder="0"
          minlength="1"
          maxlength="16"
        />
        <input
          type="button"
          value={"9"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"8"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"7"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"6"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"5"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"4"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"3"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"2"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"1"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"0"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"."}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"*"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"-"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"+"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"/"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"%"}
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value={"DEL"}
          className="button button1"
          onClick={clearResult}
        />
        <input
          type="button"
          value={"="}
          className="button button1"
          onClick={calculate}
        />
      </div>
    </div>
  );
}

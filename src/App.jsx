import { useState } from "react";
import Grid from "./Grid.jsx";
import Title from "./Title.jsx";
import Results from "./Result.jsx";
import Reset from "./Reset.jsx";
const App = () => {
  const [result, setResult] = useState([0, 0]);
  const [reset, setReset] = useState(false);
  const resetHandler = () => {
    setReset(true);
  };
  const defaultHandler = () => {
    setReset(false);
  };
  const winHandler = (player) => {
    let new_result = [...result];
    if (player === 1) {
      new_result[0] += 1;
    } else {
      new_result[1] += 1;
    }
    setResult(new_result);
  };
  return (
    <>
      <Title />
      <Grid reset={reset} default={defaultHandler} win={winHandler} />
      <Results result={result} />
      <Reset onReset={resetHandler} />
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Grid.css";
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Grid = (props) => {
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player1, setPlayer1] = useState(true);
  const [winCell, setWinCell] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [finished, setFinished] = useState(false);

  const win = (data) => {
    for (let i of winConditions) {
      if (data[i[0]] === 1 && data[i[1]] === 1 && data[i[2]] === 1) {
        let new_cell = [...winCell];
        new_cell[i[0]] = 1;
        new_cell[i[1]] = 1;
        new_cell[i[2]] = 1;
        setFinished(true);
        setWinCell(new_cell);
        props.win(0);
      } else if (data[i[0]] === -1 && data[i[1]] === -1 && data[i[2]] === -1) {
        let new_cell = [...winCell];
        new_cell[i[0]] = 1;
        new_cell[i[1]] = 1;
        new_cell[i[2]] = 1;
        setFinished(true);
        setWinCell(new_cell);
        props.win(1);
      }
    }
  };

  useEffect(() => {
    if (!finished) {
      win(data);
    }
  }, [data]);
  useEffect(() => {
    if (props.reset) {
      props.default();
      setData([0, 0, 0, 0, 0, 0, 0, 0, 0]);
      setPlayer1(true);
      setFinished(false);
      setWinCell([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
  }, [props.reset]);

  const content = data.map((value, index) => {
    if (value === 1) {
      return <i key={index} className="bi bi-circle circle choice"></i>;
    } else if (value === -1) {
      return <i key={index} className="bi bi-x-lg x choice"></i>;
    } else {
      return <i key={index}>&nbsp;</i>;
    }
  });

  const choiceHandler = (event) => {
    if (!finished) {
      const index = parseInt(event.currentTarget.id[1]);
      let new_data = [...data];
      if (player1 && new_data[index] === 0) {
        new_data[index] = 1;
        setPlayer1(false);
      } else if (!player1 && new_data[index] === 0) {
        new_data[index] = -1;
        setPlayer1(true);
      }
      setData(new_data);
    }
  };

  return (
    <>
      <div className="grid text-center">
        <div className="row col-6 mx-auto">
          <div
            id="_0"
            className={`col border-end border-3 cell border-primary ${
              data[0] === 0 && !finished ? "not_selected" : ""
            } ${winCell[0] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[0]}
          </div>
          <div
            id="_1"
            className={`col border-end border-3 cell border-primary ${
              data[1] === 0 && !finished ? "not_selected" : ""
            } ${winCell[1] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[1]}
          </div>
          <div
            id="_2"
            className={`col cell ${
              data[2] === 0 && !finished ? "not_selected" : ""
            } ${winCell[2] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[2]}
          </div>
        </div>

        <div className="row col-6 mx-auto">
          <div
            id="_3"
            className={`col border-end border-top border-3 cell border-primary ${
              data[3] === 0 && !finished ? "not_selected" : ""
            } ${winCell[3] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[3]}
          </div>
          <div
            id="_4"
            className={`col border-end border-top border-3 cell border-primary ${
              data[4] === 0 && !finished ? "not_selected" : ""
            } ${winCell[4] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[4]}
          </div>
          <div
            id="_5"
            className={`col border-top border-3 cell border-primary ${
              data[5] === 0 && !finished ? "not_selected" : ""
            } ${winCell[5] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[5]}
          </div>
        </div>

        <div className="row col-6 mx-auto">
          <div
            id="_6"
            className={`col border-end border-top border-3 cell border-primary ${
              data[6] === 0 && !finished ? "not_selected" : ""
            } ${winCell[6] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[6]}
          </div>
          <div
            id="_7"
            className={`col border-end border-top border-3 cell border-primary ${
              data[7] === 0 && !finished ? "not_selected" : ""
            } ${winCell[7] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[7]}
          </div>
          <div
            id="_8"
            className={`col border-top border-3 cell border-primary ${
              data[8] === 0 && !finished ? "not_selected" : ""
            } ${winCell[8] === 1 ? "win" : ""}`}
            onClick={choiceHandler}>
            {content[8]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Grid;

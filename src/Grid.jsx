/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "./store/store.jsx";
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
let start = true;
let data;
let winCell;
const rowKeys = ["r1", "r2", "r3"];
const cellClasses = [
  "border-end",
  "border-end",
  " ",
  "border-end border-top",
  "border-end border-top",
  "border-top",
  "border-end border-top",
  "border-end border-top",
  "border-top",
];
const Grid = () => {
  const [player1, setPlayer1] = useState(true);
  const reset = useSelector((state) => state.reset);
  const finished = useSelector((state) => state.finished);
  const dispatch = useDispatch();

  if (start) {
    data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    winCell = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  const win = (data) => {
    for (let i of winConditions) {
      if (data[i[0]] === 1 && data[i[1]] === 1 && data[i[2]] === 1) {
        winCell[i[0]] = 1;
        winCell[i[1]] = 1;
        winCell[i[2]] = 1;
        dispatch(gameActions.finishGame(true));
        dispatch(gameActions.player1Win());
      } else if (data[i[0]] === -1 && data[i[1]] === -1 && data[i[2]] === -1) {
        winCell[i[0]] = 1;
        winCell[i[1]] = 1;
        winCell[i[2]] = 1;
        dispatch(gameActions.finishGame(true));
        dispatch(gameActions.player2Win());
      }
    }
  };
  useEffect(() => {
    dispatch(gameActions.finishGame(false));
  }, []);
  useEffect(() => {
    if (!finished) {
      win(data);
    }
  }, [data.reduce((current, next) => (current += next))]);

  useEffect(() => {
    if (reset) {
      data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      winCell = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      dispatch(gameActions.resetGame(false));
      dispatch(gameActions.finishGame(false));
      setPlayer1(true);
    }
  }, [reset]);

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
    start = false;
    if (!finished) {
      const index = parseInt(event.currentTarget.id[1]);
      if (player1 && data[index] === 0) {
        data[index] = 1;
        setPlayer1(false);
      } else if (!player1 && data[index] === 0) {
        data[index] = -1;
        setPlayer1(true);
      }
    }
  };
  const grid = rowKeys.map((rowkey, rowIndex) => (
    <div key={rowkey} className="row mx-auto">
      {rowKeys.map((_, cellIndex) => (
        <div
          key={`${rowIndex * 3 + cellIndex}`}
          id={"_" + (rowIndex * 3 + cellIndex)}
          className={`col border-3 cell border-primary ${
            cellClasses[rowIndex * 3 + cellIndex]
          } ${
            data[rowIndex * 3 + cellIndex] === 0 && !finished
              ? "not_selected"
              : ""
          } ${winCell[rowIndex * 3 + cellIndex] === 1 ? "win" : ""}`}
          onClick={choiceHandler}>
          {content[rowIndex * 3 + cellIndex]}
        </div>
      ))}
    </div>
  ));

  return (
    <>
      <div className="grid text-center">{grid}</div>
    </>
  );
};

export default Grid;

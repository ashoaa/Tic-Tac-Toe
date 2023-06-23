import "./Reset.css";
import { useDispatch } from "react-redux";
import { gameActions } from "./store/store.jsx";
const Reset = () => {
  const dispatch = useDispatch();
  const clickGameHandler = () => {
    dispatch(gameActions.resetGame(true));
  };
  const clickResultHandler = () => {
    // localStorage.clear();
    dispatch(gameActions.resetALL());
  };
  return (
    <>
      <div className="button">
        <button
          id="reset-btn1"
          className="btn btn-outline-danger px-2"
          onClick={clickResultHandler}>
          Reset All
        </button>
        <button
          id="reset-btn2"
          className="btn btn-outline-primary px-2"
          onClick={clickGameHandler}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Reset;

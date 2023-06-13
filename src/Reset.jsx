import "./Reset.css";
import { useDispatch } from "react-redux";
import { gameActions } from "./store/store.jsx";
const Reset = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(gameActions.resetGame(true));
  };
  return (
    <>
      <div className="button">
        <button
          id="reset-btn"
          className="btn btn-outline-danger px-5"
          onClick={clickHandler}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Reset;

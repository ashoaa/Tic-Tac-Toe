import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Result.css";
const players = [1, 2];

const Result = () => {
  const player1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);
  const result = players.map((player) => (
    <div key={player} className="col text-center player-name">
      Player{" "}
      <i
        className={`bi ${
          player === 1 ? "bi-circle circle" : "bi-x-lg x"
        } player-icon`}></i>
      &nbsp;<i className="bi bi-arrow-right"></i>
      &nbsp;{player === 1 ? player1 : player2}
    </div>
  ));
  return (
    <>
      <div id="result-device" className="row col-6 mx-auto h-auto mb-5">
        {result}
      </div>
    </>
  );
};

export default Result;

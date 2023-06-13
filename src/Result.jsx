import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Result.css";

const Result = () => {
  const playre1 = useSelector((state) => state.player1);
  const player2 = useSelector((state) => state.player2);

  return (
    <>
      <div id="result-device" className="row col-6 mx-auto h-auto mb-5">
        <div className="col text-center player-name">
          Player <i className="bi bi-circle circle player-icon"></i>
          &nbsp;
          <i className="bi bi-arrow-right"></i>
          &nbsp;{playre1}
        </div>
        <div className="col text-center player-name">
          Player <i className="bi bi-x-lg x player-icon"></i>
          &nbsp;
          <i className="bi bi-arrow-right"></i>
          &nbsp;{player2}
        </div>
      </div>
    </>
  );
};

export default Result;

import "./Reset.css";
const Reset = (props) => {
  const clickHandler = () => {
    props.onReset();
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

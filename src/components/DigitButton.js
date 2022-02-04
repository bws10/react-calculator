import { ACTIONS } from "../App";

export default function DigitButton({ dispatch, digit }) {
  return (
    <div
      className="btn btn-primary"
      onClick={() =>
        dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: { digit },
        })
      }
    >
      {digit}
    </div>
  );
}

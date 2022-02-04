import { ACTIONS } from "../App.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OppButton({ opp, dispatch }) {
  return (
    <div
      className="btn btn-info opp-buttons"
      onClick={() =>
        dispatch({
          type: ACTIONS.CHOOSE_OPP,
          payload: { opp },
        })
      }
    >
      {opp}
    </div>
  );
}

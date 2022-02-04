import "./index.css";
import React, { useReducer, useEffect } from "react";
import DigitButton from "./components/DigitButton";
import OppButton from "./components/OppButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPP: "choose-opp",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  let regEx = /[+/*\-]+$/;
  let regExContainsOp = /[+/*\-]/;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.ans === true && payload.digit === "0") {
        return {
          ...state,
          current: payload.digit,
          formula: "",
          ans: false,
          neg: false,
        };
      }
      if (state.ans === true && payload.digit === ".") {
        return {
          ...state,
          current: "0.",
          formula: "0.",
          ans: false,
          neg: false,
        };
      }
      if (state.ans === true && payload.digit !== "0") {
        return {
          ...state,
          current: payload.digit,
          formula: payload.digit,
          ans: false,
          neg: false,
        };
      }

      if (payload.digit === "0" && state.current === "0") {
        return state;
      }
      if (payload.digit === "." && state.current.includes(".")) {
        return state;
      }
      if (state.current === "0" && payload.digit === ".") {
        return {
          ...state,
          current: `${state.current}${payload.digit}`,
          formula: `0${payload.digit}`,
          neg: false,
        };
      }
      if (state.current === "0" || regEx.test(state.formula)) {
        return {
          ...state,
          current: payload.digit,
          formula: `${state.formula}${payload.digit}`,
          neg: false,
        };
      }
      return {
        ...state,
        current: `${state.current}${payload.digit}`,
        formula: `${state.formula}${payload.digit}`,
        neg: false,
      };

    case ACTIONS.CHOOSE_OPP:
      var opp =
        payload.opp === "÷" ? "/" : payload.opp === "x" ? "*" : payload.opp;

      if (state.ans === true) {
        return {
          ...state,
          current: "0",
          formula: `${state.current}${opp}`,
          ans: false,
        };
      }
      if (state.formula === "") return state;
      if (/[/*+]$/.test(state.formula) && state.neg === false && opp === "-") {
        return {
          ...state,

          formula: `${state.formula}${opp}`,
          neg: true,
        };
      }
      if (regEx.test(state.formula) && state.neg === true && opp !== "-")
        return state;
      if (regEx.test(state.formula) && state.neg === true && opp === "-") {
        return {
          ...state,

          formula: state.formula.replace(regEx, opp),
          neg: false,
        };
      }
      if (regEx.test(state.formula)) {
        return {
          ...state,

          formula: state.formula.replace(regEx, opp),
          neg: false,
        };
      }

      return {
        ...state,

        formula: `${state.formula}${opp}`,
      };
    case ACTIONS.CLEAR:
      return {
        current: "0",
        formula: "",
        neg: false,
        and: false,
      };
    case ACTIONS.DELETE:
      if (state.ans === true) {
        return {
          current: "0",
          formula: "",
          neg: false,
          and: false,
        };
      }
      if (
        regEx.test(state.formula) &&
        !regExContainsOp.test(state.formula.slice(0, -1))
      ) {
        return {
          ...state,
          current: state.formula.slice(0, -1),
          formula: state.formula.slice(0, -1),
        };
      } else if (state.current.length === 1) {
        return {
          ...state,
          current: "0",
          formula: state.formula.slice(0, -1),
        };
      } else {
        return {
          ...state,
          current: state.current.slice(0, -1),
          formula: state.formula.slice(0, -1),
        };
      }
    case ACTIONS.EVALUATE:
      if (regEx.test(state.formula) || state.formula.includes("=")) {
        return state;
      }
      if (regExContainsOp.test(state.formula)) {
        let res = evaluate(state.formula);
        if (res === "ERROR") {
          return {
            ...state,
            current: "ERROR",
          };
        }
        var iOfPoint = res.toString(10).indexOf(".");
        iOfPoint >= 0 ? (iOfPoint = 8 - iOfPoint) : (iOfPoint = 8);
        res = +res.toFixed(iOfPoint);

        return {
          current: res,
          formula: `${state.formula}=${res}`,
          neg: false,
          ans: true,
        };
      }
      return state;

    default:
      return state;
  }
}
const evaluate = (f) => {
  try {
    return eval(f);
  } catch (err) {
    console.log(err.message);
    return "ERROR";
  }
};

function App() {
  const [{ current, formula }, dispatch] = useReducer(reducer, {
    current: "0",
    formula: "",
    neg: false,
    ans: false,
  });
  useEffect(() => {
    function handleKeyPress(e) {
      if (/^[0-9.]{1}$/.test(e.key)) {
        let digit = e.key;
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }
      if (/^[/*\-+]{1}$/.test(e.key)) {
        let opp = e.key;
        dispatch({ type: ACTIONS.CHOOSE_OPP, payload: { opp } });
      }
      if (e.key === "c" || e.key === "C" || e.key === "Delete") {
        dispatch({ type: ACTIONS.CLEAR });
      }
      if (e.key === "Enter" || e.key === "=") {
        dispatch({ type: ACTIONS.EVALUATE });
      }
      if (e.key === "Backspace") {
        dispatch({ type: ACTIONS.DELETE });
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="calculator">
      <div id="display">{current}</div>
      <div id="sub-display">{formula}</div>
      <div
        className="btn btn-danger"
        id="clear"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        AC
      </div>
      <div
        className="btn btn-warning"
        id="Delete"
        onClick={() => dispatch({ type: ACTIONS.DELETE })}
      >
        DEL
      </div>

      <OppButton opp="÷" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OppButton opp="x" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OppButton opp="-" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OppButton opp="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <div
        className="btn btn-info"
        id="equals"
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </div>
    </div>
  );
}

export default App;

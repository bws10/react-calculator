import "./index.css";
import React, { useReducer, useEffect } from "react";
import DigitButton from "./components/DigitButton";
import OppButton from "./components/OppButton";

const keys = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  0: "zero",
  "+": "add",
  "-": "subtract",
  "/": "divide",
  "*": "multiply",
  "(": "open",
  ")": "close",
  "=": "equals",
  Enter: "equals",
  c: "clear",
  Delete: "clear",
  Backspace: "back",
  x: "multiply",
  ".": "decimal",
};
export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPP: "choose-opp",
  CLEAR: "clear",
  DELETE: "delete",
  EVALUATE: "evaluate",
};
let neg = false;
let counter = 0;
console.log("Count = " + counter);

function reducer(state, { type, payload }) {
  counter++;
  console.log("Count = " + counter);
  let f = [];
  let last = state.formula.length - 1;
  let regEx = /[+/*-]$/;
  let regExContainsOp = /[+/*-]/;
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      console.log("ADD DIGIT");
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
          formula: `${state.formula}${payload.digit}`,
        };
      }
      if (state.current === "0") {
        return {
          ...state,
          current: payload.digit,
          formula: payload.digit,
        };
      }
      return {
        ...state,
        current: `${state.current}${payload.digit}`,
        formula: `${state.formula}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPP:
      console.log("CHOOSE OPP");
      var opp =
        payload.opp === "÷" ? "/" : payload.opp === "x" ? "*" : payload.opp;
      console.log("Negative number set - " + neg);
      if (state.formula === "") {
        return state;
      }
      if (regEx.test(state.formula)) {
        if (neg === false && opp === "-") {
          f = `${state.formula}${opp}`;
          neg = true;
          console.log("change Sign - Negative number set - " + neg);
          console.log("formula = " + f);
        } else {
          f = state.formula.split("");
          if (neg === true) {
            f.pop();
            last = f.length - 1;
            neg = false;
            console.log("change Sign - Negative number set - " + neg);
            console.log("formula = " + f);
          }

          console.log("formula = " + f);
          f[last] = opp;
          console.log("formula = " + f);
          f = f.join("");
          console.log("change Opp - Negative number set - " + neg);
          console.log("formula = " + f);
        }
      } else {
        f = `${state.formula}${opp}`;
        console.log("Set OPP");
        console.log("formula = " + f);
      }
      console.log("return - formula = " + f);
      return {
        ...state,

        formula: f,
      };
    case ACTIONS.CLEAR:
      console.log("CLEAR");
      return {
        current: "0",
        formula: "",
      };
    default:
      return state;
  }
}
function App() {
  const [{ current, formula }, dispatch] = useReducer(reducer, {
    current: "0",
    formula: "",
  });
  useEffect(() => {
    function handleKeyPress(e) {
      console.log(e.key);
      console.log(/c/i.test(e.key));
      if (/[0-9.()]/.test(e.key)) {
        let digit = e.key;
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }
      if (/[/*-+]/.test(e.key)) {
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
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
      >
        C
      </div>
      <DigitButton digit="(" dispatch={dispatch} />
      <DigitButton digit=")" dispatch={dispatch} />
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
      <div className="btn btn-info" id="equals">
        =
      </div>
    </div>
  );
}

export default App;

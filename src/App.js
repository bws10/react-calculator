import "./index.css";
import React, { useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDivide,
  faTimes,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const DIVIDE = "divide";
const MULTIPLY = "multiply";
const SUBTRACT = "subtract";
const ADD = "add";

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

let neg = false;
let ans = false;

const CalcButton = (props) => {
  const ID = props.id;
  if (props.value === undefined) {
    return (
      <div
        className={"btn btn-" + props.type}
        id={props.id}
        onClick={props.onClick}
      >
        <FontAwesomeIcon
          id={props.id}
          icon={props.icon}
          onClick={props.onClick}
        />
      </div>
    );
  } else {
    return (
      <div
        className={"btn btn-" + props.type}
        id={props.id}
        onClick={props.onClick}
      >
        {props.value}
      </div>
    );
  }
};

const Display = (props) => {
  let disp = props.display;
  disp.length > 9
    ? (disp = Number(disp).toExponential(4))
    : (disp = props.display);
  return (
    <div id="display" onChange={props.onChange}>
      {disp}
    </div>
  );
};

const SubDisplay = (props) => {
  let disp = props.display;

  return (
    <div id="sub-display" onChange={props.onChange}>
      {disp}
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      formula: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    let k = {
      currentTarget: {
        id: keys[e.key],
      },
    };

    this.handleClick(k);
  }
  handleClick(e) {
    let f = [];
    let last = this.state.formula.length - 1;
    let regEx = /[+/*-]$/;
    switch (e.currentTarget.id) {
      case "nine":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "9",
            formula: "9",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "9",
            formula: this.state.formula + "9",
          });
        } else {
          this.setState({
            display: this.state.display + "9",
            formula: this.state.formula + "9",
          });
        }
        break;
      case "eight":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "8",
            formula: "8",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "8",
            formula: this.state.formula + "8",
          });
        } else {
          this.setState({
            display: this.state.display + "8",
            formula: this.state.formula + "8",
          });
        }
        break;
      case "seven":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "7",
            formula: "7",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "7",
            formula: this.state.formula + "7",
          });
        } else {
          this.setState({
            display: this.state.display + "7",
            formula: this.state.formula + "7",
          });
        }
        break;
      case "six":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "6",
            formula: "6",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "6",
            formula: this.state.formula + "6",
          });
        } else {
          this.setState({
            display: this.state.display + "6",
            formula: this.state.formula + "6",
          });
        }
        break;
      case "five":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "5",
            formula: "5",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "5",
            formula: this.state.formula + "5",
          });
        } else {
          this.setState({
            display: this.state.display + "5",
            formula: this.state.formula + "5",
          });
        }
        break;
      case "four":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "4",
            formula: "4",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "4",
            formula: this.state.formula + "4",
          });
        } else {
          this.setState({
            display: this.state.display + "4",
            formula: this.state.formula + "4",
          });
        }
        break;
      case "three":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "3",
            formula: "3",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "3",
            formula: this.state.formula + "3",
          });
        } else {
          this.setState({
            display: this.state.display + "3",
            formula: this.state.formula + "3",
          });
        }
        break;
      case "two":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "2",
            formula: "2",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "2",
            formula: this.state.formula + "2",
          });
        } else {
          this.setState({
            display: this.state.display + "2",
            formula: this.state.formula + "2",
          });
        }
        break;
      case "one":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "1",
            formula: "1",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          this.setState({
            display: "1",
            formula: this.state.formula + "1",
          });
        } else {
          this.setState({
            display: this.state.display + "1",
            formula: this.state.formula + "1",
          });
        }
        break;
      case "zero":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "0",
            formula: "",
          });
        } else if (
          this.state.display[0] === "0" &&
          this.state.display[1] !== "."
        ) {
          if (this.state.formula === "" || this.state.display === "0") {
            this.setState({
              display: "0",
              formula: this.state.formula,
            });
          } else {
            this.setState({
              display: "0",
              formula: this.state.formula + "0",
            });
          }
        } else {
          this.setState({
            display: this.state.display + "0",
            formula: this.state.formula + "0",
          });
        }
        break;
      case "decimal":
        neg = false;
        if (ans === true) {
          ans = false;
          this.setState({
            display: "0.",
            formula: "0.",
          });
        } else if (this.state.display === "0") {
          ans = false;
          this.setState({
            display: "0.",
            formula: this.state.formula + "0.",
          });
        } else if (this.state.display.includes(".")) {
          this.setState({
            display: this.state.display,
            formula: this.state.formula,
          });
        } else {
          this.setState({
            display: this.state.display + ".",
            formula: this.state.formula + ".",
          });
        }

        break;
      case "clear":
        neg = false;
        ans = false;
        this.setState({
          display: "0",
          formula: "",
        });
        break;
      case "add":
        if (ans === true) {
          this.setState({
            formula: this.state.display,
          });

          ans = false;
        }
        if (this.state.formula === "") break;
        if (regEx.test(this.state.formula)) {
          f = this.state.formula.split("");
          if (neg === true) {
            f.pop();
            last = f.length - 1;
            neg = false;
          }
          f[last] = "+";
          f = f.join("");
        } else {
          f = this.state.formula + "+";
        }

        this.setState({
          display: "0",
          formula: f,
        });
        break;
      case "subtract":
        if (ans === true) {
          this.setState({
            formula: this.state.display,
          });

          ans = false;
        }
        ans = false;

        if (this.state.formula === "") break;
        if (regEx.test(this.state.formula)) {
          if (neg === false) {
            f = this.state.formula + "-";
            neg = true;
          } else {
            f = this.state.formula.split("");
            if (neg === true) {
              f.pop();
              last = f.length - 1;
              neg = false;
            }
            f[last] = "-";
            f = f.join("");
          }
        } else {
          f = this.state.formula + "-";
        }
        this.setState({
          display: "0",
          formula: f,
        });
        break;
      case "multiply":
        if (ans === true) {
          this.setState({
            formula: this.state.display,
          });

          ans = false;
        }
        ans = false;

        if (this.state.formula === "") break;
        if (regEx.test(this.state.formula)) {
          f = this.state.formula.split("");
          if (neg === true) {
            f.pop();
            last = f.length - 1;
            neg = false;
          }
          f[last] = "*";
          f = f.join("");
        } else {
          f = this.state.formula + "*";
        }
        this.setState({
          display: "0",
          formula: f,
        });
        break;
      case "divide":
        if (ans === true) {
          this.setState({
            formula: this.state.display,
          });

          ans = false;
        }
        ans = false;

        if (this.state.formula === "") break;
        if (regEx.test(this.state.formula)) {
          f = this.state.formula.split("");
          if (neg === true) {
            f.pop();
            last = f.length - 1;
            neg = false;
          }
          f[last] = "/";
          f = f.join("");
        } else {
          f = this.state.formula + "/";
        }
        this.setState({
          display: "0",
          formula: f,
        });
        break;
      case "equals":
        neg = false;
        console.log("equals");
        const evaluate = (f) => {
          try {
            return eval(f);
          } catch (err) {
            this.setState({
              display: "ERROR",
            });
            console.log(err.message);
          }
        };
        let res = evaluate(this.state.formula);
        var iOfPoint = res.toString(10).indexOf(".");
        iOfPoint >= 0 ? (iOfPoint = 8 - iOfPoint) : (iOfPoint = 8);
        res = +res.toFixed(iOfPoint);
        //console.log(res)
        ans = true;
        this.setState({
          display: res,
          formula: this.state.formula + "=" + res,
        });

        break;
      case "open":
        this.setState({
          formula: this.state.formula + "(",
        });
        break;

      case "close":
        this.setState({
          formula: this.state.formula + ")",
        });
        break;
      case "back":
        if (ans === true) {
          this.handleKeyPress({ key: "c" });
        }
        if (this.state.display.length === 1) {
          this.setState({
            display: "0",
            formula: this.state.formula.slice(0, -1),
          });
        } else {
          this.setState({
            display: this.state.display.slice(0, -1),
            formula: this.state.formula.slice(0, -1),
          });
        }
        break;
      default:
        break;
    }
    //console.log(e.target.id)
  }
  render() {
    return (
      <div id="calculator">
        <Display display={this.state.display} onChange={this.handleChange} />
        <SubDisplay display={this.state.formula} onChange={this.handleChange} />
        <CalcButton
          type="danger"
          id="clear"
          value="C"
          onClick={this.handleClick}
        />

        <CalcButton
          type="info"
          id="open"
          value="("
          onClick={this.handleClick}
        />

        <CalcButton
          type="info"
          id="close"
          value=")"
          onClick={this.handleClick}
        />

        <CalcButton
          type="info"
          id={DIVIDE}
          icon={faDivide}
          onClick={this.handleClick}
        />

        <CalcButton
          type="primary"
          id="seven"
          value="7"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="eight"
          value="8"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="nine"
          value="9"
          onClick={this.handleClick}
        />
        <CalcButton
          type="info"
          id={MULTIPLY}
          icon={faTimes}
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="four"
          value="4"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="five"
          value="5"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="six"
          value="6"
          onClick={this.handleClick}
        />
        <CalcButton
          type="info"
          id={SUBTRACT}
          icon={faMinus}
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="one"
          value="1"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="two"
          value="2"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="three"
          value="3"
          onClick={this.handleClick}
        />
        <CalcButton
          type="info"
          id={ADD}
          icon={faPlus}
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="zero"
          value="0"
          onClick={this.handleClick}
        />
        <CalcButton
          type="primary"
          id="decimal"
          value="."
          onClick={this.handleClick}
        />
        <CalcButton
          type="info"
          id="equals"
          value="="
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;

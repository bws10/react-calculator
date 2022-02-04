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
    let regExContainsOp = /[+/*-]/;
    console.log(ans);
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
        if (
          regEx.test(this.state.formula) ||
          this.state.formula.includes("=")
        ) {
          break;
        } else if (regExContainsOp.test(this.state.formula)) {
          let res = evaluate(this.state.formula);
          var iOfPoint = res.toString(10).indexOf(".");
          iOfPoint >= 0 ? (iOfPoint = 8 - iOfPoint) : (iOfPoint = 8);
          res = +res.toFixed(iOfPoint);

          this.setState({
            display: res,
            formula: `${this.state.formula}=${res}`,
          });
          ans = true;
        } else {
          break;
        }

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
        if (regEx.test(this.state.formula)) {
          this.setState({
            display: this.state.formula.slice(0, -1),
            formula: this.state.formula.slice(0, -1),
          });
        } else if (this.state.display.length === 1) {
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
  }
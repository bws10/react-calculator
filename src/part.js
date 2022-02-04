
  handleClick(e) {
    let f = [];
    let last = this.state.formula.length - 1;
    let regEx = /[+/*-]$/;
    let regExContainsOp = /[+/*-]/;
    console.log(ans);
    switch (e.currentTarget.id) {
      
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
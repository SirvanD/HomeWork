import { Component } from "react";
import { render } from "@testing-library/react";
import "./ChickenCounter.css";

export default class ChickenCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick(e) {
    // console.log(e.target.value);
    this.setState({ counter: e.target.value });
  }
  handlePlus() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  handleMinus() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  handleReset() {
    this.setState({
      counter: 0,
    });
  }

  render() {
    const counter = this.state.counter;
    const isdisable = counter === 0;
    // const plusBtn = counter++;

    return (
      <div className="chicken-container">
        <div>Chicken</div>
        <div>
          <button onClick={this.handleMinus} disabled={isdisable}>
            -
          </button>
        </div>
        <div>
          <span onChange={this.handleClick}>{counter}</span>
        </div>
        <div>
          <button onClick={this.handlePlus}> + </button>
        </div>
        <div>
          <button onClick={this.handleReset}> reset </button>
        </div>
      </div>
    );
  }
}

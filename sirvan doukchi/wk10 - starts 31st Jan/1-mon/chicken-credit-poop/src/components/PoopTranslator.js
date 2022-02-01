import { Component } from "react";
import "./PoopTranslator.css";

export default class PoopTranslator extends Component {
  //class properties
  state = {
    content: "",
  };

  // arrow methods
  //event handlers - purpose function
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
    const content = e.target.value;
    if (content.includes("poop")) {
      this.setState({
        content: content.replace("poop", "💩"),
      });
    }
    // console.log(content);
  };

  render() {
    return (
      <div className="poop-container">
        <div>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Type in poop!"
          />
        </div>

        <div>{this.state.content}</div>
      </div>
    );
  }
}

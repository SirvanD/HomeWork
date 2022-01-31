import { Component } from "react";
import "./CardDetector.css";

export default class CardDetector extends Component {
  constructor() {
    super();
    this.state = {
      cardType: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleCredit = this.handleCredit.bind(this);
  }

  handleChange(e) {
    // this.setState({
    //   content: e.target.value,
    // });
    const content = e.target.value;

    if (content.startsWith("34") || content.startsWith("37")) {
      this.setState({
        cardType: "AMEX",
      });
    } else if (
      content.startsWith(51) ||
      content.startsWith(52) ||
      content.startsWith(53) ||
      content.startsWith(54) ||
      content.startsWith(55)
    ) {
      this.setState({
        cardType: "MasterCard",
      });
    } else if (content.startsWith("6011")) {
      this.setState({
        cardType: "Discover",
      });
    } else if (content.startsWith("4")) {
      this.setState({
        cardType: "Visa",
      });
    } else {
      this.setState({
        cardType: "",
      });
    }

    // console.log(this.state.content);

    // console.log(this.state.cardType);
  }

  render() {
    const cardType = this.state.cardType;

    return (
      <div className="card-container">
        <div>
          <input
            onChange={this.handleChange}
            type="number"
            placeholder="Credit card number"
          />
        </div>

        <div>
          <p> {cardType} </p>
        </div>
      </div>
    );
  }
}

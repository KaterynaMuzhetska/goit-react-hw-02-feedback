import { Component } from "react";

import Statistic from "./Statistic/Statistic";

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGoodClick = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  handleNeutralClick = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  handleBadClick = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  }

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleGoodClick}>Good</button>
          <button onClick={this.handleNeutralClick}>Neutral</button>
          <button onClick={this.handleBadClick}>Bad</button>
        </div>
        <div>
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <span>No feedback given</span>
          )}
        </div>
      </div>
    );
  }
}
export default Feedback;

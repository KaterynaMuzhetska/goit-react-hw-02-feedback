import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistic from "./Statistic/Statistic";
import Section from "./Section/Section";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
        <Section title="Please leave feedback">
          <FeedbackOptions handleInc={this.handleInc} />,
        </Section>

        <Section title="Statictics">
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
        </Section>
      </div>
    );
  }
}
export default Feedback;

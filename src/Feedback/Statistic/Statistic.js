import React from "react";

function Statistic({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <div>
      <div>Good coment {good}</div>
      <div>Neutral coment {neutral}</div>
      <div>Bad coment {bad}</div>
      <div>Total {total}</div>
      <div>Positive feedback {positiveFeedback} %</div>
    </div>
  );
}

export default Statistic;

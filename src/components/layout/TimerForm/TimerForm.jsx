import "./TimerForm.css";

import PropTypes from "prop-types";
import { useState } from "react";

const TimerForm = ({ addTimer }) => {
  const [seconds, setSeconds] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (seconds > 0) {
      addTimer(parseFloat(seconds));
      setSeconds("");
    }
  };

  return (
    <form className="timer-form" onSubmit={handleSubmit}>
      <h1>New Timer</h1>
      <label>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
          placeholder="Enter seconds!!"
          required
        />
      </label>
      <button type="submit">Add Timer</button>
    </form>
  );
};

TimerForm.propTypes = {
  addTimer: PropTypes.func.isRequired,
};

export default TimerForm;

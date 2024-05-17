import "./TimerList.css";

import { FaRegWindowClose } from "react-icons/fa";
import PropTypes from 'prop-types';

const TimerList = ({ timers, deleteTimer }) => {
  return (
    <div className="timer-list">
      {timers.map((timer) => (
        <div className="timer-item" key={timer.id}>
          <div className="timer-info">
            <span>{timer.remaining.toFixed(2)} seconds</span>
            <span>{timer.createdAt}</span>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteTimer(timer.id)}
          >
            <FaRegWindowClose size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};


TimerList.propTypes = {
    timers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
        remaining: PropTypes.number.isRequired,
      })
    ).isRequired,
    deleteTimer: PropTypes.func.isRequired,
  };

export default TimerList;

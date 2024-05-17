import "./App.css";

import  { useEffect, useState } from "react";

import TimerForm from "./components/layout/TimerForm/TimerForm";
import TimerList from "./components/layout/TimerList/TimerList";

const App = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers
          .map((timer) => ({
            ...timer,
            remaining: timer.remaining - 0.1,
          }))
          .filter((timer) => timer.remaining > 0)
      );
    }, 10);

    return () => clearInterval(interval);
  }, []);

  const addTimer = (seconds) => {
    const newTimer = {
      id: Date.now(),
      createdAt: new Date().toLocaleString(),
      remaining: seconds,
      timeoutId: null,
    };
    setTimers([...timers, newTimer]);
  };

  const deleteTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="app">
      <div className="left">
        <TimerList timers={timers} deleteTimer={deleteTimer} />
      </div>
      <div className="right">
        <TimerForm addTimer={addTimer} />
      </div>
    </div>
  );
};

export default App;

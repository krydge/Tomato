
import './App.css';
import Tomato from "./Components/tomato"
import About from "./Components/About"
import Timer from "./Components/Timer"
import React, { useState } from 'react';

let rounds = 0;

function App() {

  const [workTime, setWorkTime] = useState(null);
  const [restTime, setRestTime] = useState(null);
  let [start, setStart] = useState(false);
  let [time, settime] = useState(0);

  const handleWorkTime = (e) => {
    setWorkTime(e.target.value);
  }
  const handleRestTime = (e) => {
    setRestTime(e.target.value)
  }
  let handleStart = (e) => {
    if (start == false)
      setStart = true
    else
      setStart = false
    main()
  }
  function main() {
    if(start=true)
    alert("starting pomodoro")
    else
    alert("stopping pomodoro")
    while (start != false) {
      if (isFourthRound(rounds)) {
        console.log("in main is fourth round: round= " + rounds)
        rounds = 0;
        workTimer(restTime);
      }
      else {
        console.log("in main not fourth round: round= " + rounds)
        workTimer(workTime);
        rounds++
      }
    }
  }
  function workTimer(time) {
    let passedTime = 0;
    while (passedTime != time) {
      console.log("passed time =" + passedTime);
      console.log("initial time =" + time);
      // console.log("Work time Remaining: " + (remainingTime(time, passedTime)))
      // setTimeout(passedTime++, 100000);
      pauseBrowser(1000);
      passedTime++;

    }
  }
  function restTimer(time) {
    let passedTime = 0;
    while (passedTime != time) {
      console.log("passed time =" + passedTime);
      console.log("initial time =" + time);
      pauseBrowser(1000);
      passedTime++;
      // console.log("Work time Remaining: " + (remainingTime(time, passedTime)))
      // setTimeout(passedTime++, 100000);
    }
  }
  function remainingTime(timeInSeconds, passedTime) {
    return (timeInSeconds - passedTime)
  }
  function isFourthRound(rounds) {
    if (rounds < 4) {
      return false;
    }
    return true;
  }
  function pauseBrowser(millis) {
    var date = Date.now();
    var curDate = null;
    do {
        curDate = Date.now();
    } while (curDate-date < millis);
}

  // start pomodaro with 15 minutes work time
  // increse rounds count
  // check round count if less than 4
  // start break time of 5 minutes
  //     else
  //      reset rounds count to zero
  // start break timer with 30 minutes
  // start pomodaro with 15 minutes work time

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label for="workTime">How long do you want each work round to last?:</label>
          <input for="workTime" onChange={handleWorkTime}></input>
          <br />
          <label for="restTime">How long do you want each rest round to last?:</label>
          <input for="restTime" onChange={handleRestTime}></input>
          <br />
        </form>
        <button for="startTimer" onClick={handleStart}>Start your Timer</button>
      </header>
    </div>
  );
}

export default App;

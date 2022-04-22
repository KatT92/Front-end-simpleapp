import React from "react";
import "./Customise.css";
import Header from "../Header";

function Customise({
  setShowReminder,
  setShowToDo,
  setShowGoals,
  showReminder,
  showToDo,
  showGoals,
}) {
  function setReminder() {
    if (showReminder === true) {
      setShowReminder(!showReminder);
    } else {
      setShowReminder(!showReminder);
    }
  }

  function setToDo() {
    if (showToDo === true) {
      setShowToDo(!showToDo);
    } else {
      setShowToDo(!showToDo);
    }
  }

  function setGoals() {
    if (showGoals === true) {
      setShowGoals(!showGoals);
    } else {
      setShowGoals(!showGoals);
    }
  }

  return (
    <div>
      <Header />
      <div className="BlueForm">
        <h2 className="TitleForm">Customise</h2>
        <div className="InpToDo">
          <h3>Reminders</h3>
          <div className="Switch">
            <button
              id="0"
              className={showReminder.toString()}
              onClick={setReminder}
            ></button>
          </div>
        </div>
        <div className="InpToDo">
          <h3>To Do list</h3>
          <div className="Switch">
            <button
              id="1"
              className={showToDo.toString()}
              onClick={setToDo}
            ></button>
          </div>
        </div>
        <div className="InpToDo">
          <h3>Goals</h3>
          <div className="Switch">
            <button
              id="2"
              className={showGoals.toString()}
              onClick={setGoals}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customise;

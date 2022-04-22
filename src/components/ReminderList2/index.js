import React, { useEffect, useState } from "react";
import ReminderListItem2 from "../ReminderListItem2";

import AddTodoListButton from "../AddTodoListButton";
import { useAuth0 } from "@auth0/auth0-react";

const ReminderList2 = () => {
  const [items, setItems] = useState([]);
  const { user } = useAuth0();
  const user_id = Number(user.sub.substring(14, 18));
  const [count, setCount] = useState(0);

  let date = new Date();
  let day1 = date.getDate();
  let month1 = date.getMonth();
  let year1 = date.getFullYear();
  const [day, setDay] = useState(day1);
  const [month, setMonth] = useState(month1 + 1);
  const [year, setYear] = useState(year1);

  useEffect(() => {
    async function getReminders() {
      let response = await fetch(
        `https://simple-app-nd.herokuapp.com/users/${user_id}/reminders`
      );
      let data = await response.json();
      if (data.success) {
        console.log("dp2", data.payload);
        let newArray = data.payload.filter((item) => {
          console.log(item.due_date.substring(8, 10));
          return (
            item.iscompleted === false &&
            item.due_date.substring(8, 10) === day.toString()
          );
        });
        setItems(newArray);
      }
    }
    getReminders();
  }, [user_id, day, count, setCount]);

  function changeDate(letter) {
    if (letter === "<") {
      setDay(day - 1);
    } else if (letter === ">") {
      setDay(day + 1);
    }
  }

  return (
    <div className="Blue">
      <div className="header">
        <h2 className="todo-header">
          <button
            type="button"
            className="daybutton"
            onClick={() => {
              changeDate("<");
            }}
          >
            {"<"}
          </button>
          {day}-{month}-{year} Reminder
          <button
            type="button"
            className="daybutton"
            onClick={() => {
              changeDate(">");
            }}
          >
            {" "}
            {">"}{" "}
          </button>
        </h2>
        <AddTodoListButton page={"Reminders2"} target={"/add"} />
      </div>

      <div className="ToDo" style={{ display: "block" }}>
        {items.map((item) => (
          <ReminderListItem2
            key={item.reminder_id}
            item={item}
            setItems={setItems}
            items={items}
            reminder_id={item.reminder_id}
            time={item.time}
          />
        ))}
      </div>
    </div>
  );
};
export default ReminderList2;

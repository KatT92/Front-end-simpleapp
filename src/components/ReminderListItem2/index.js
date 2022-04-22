import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ReminderListItem2 = ({ item, items, setItems, reminder_id }) => {
  const { user } = useAuth0();
  const [user_id] = useState(Number(user.sub.substring(14, 18)));

  function remove() {
    setItems(
      items.filter((item) => {
        return reminder_id !== item.reminder_id;
      })
    );
  }

  async function fetchPutReminders(bool) {
    let response = await fetch(
      `https://simple-app-nd.herokuapp.com/users/${user_id}/reminders/${reminder_id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: item.user_id,
          reminder_id: item.reminder_id,
          text: item.text,
          due_date: item.due_date,
          time: item.time,
          iscompleted: bool,
          created: item.created,
        }),
      }
    );
    let data = await response.json();
    console.log("put dp", data.payload);
    return data.payload;
  }

  async function fetchDeleteReminders() {
    let response = await fetch(
      `https://simple-app-nd.herokuapp.com/users/${user_id}/reminders/${reminder_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    console.log("delete dp", data);
    return data.payload;
  }

  async function handleClickDel(e) {
    e.target.style.borderRadius = "20px";
    e.target.style.backgroundColor = "red";
    // e.target.style.textShadow = "0px 0px 5px #000000";
    fetchDeleteReminders();

    setTimeout(() => remove(e), 1000);
  }

  async function handleClickComp(e) {
    e.target.style.color = "#A3F596";
    e.target.style.borderRadius = "20px";
    fetchPutReminders(true);
    setTimeout(() => remove(e), 1000);
  }

  return (
    <div className="item-reminder">
      <h3 className="itemTitle" onClick={handleClickComp}>
        {item.text} at {item.time}
      </h3>
      <h3 className="itemDelete" onClick={handleClickDel}>
        X
      </h3>
    </div>
  );
};
export default ReminderListItem2;

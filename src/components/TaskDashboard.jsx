import React from "react";
import { useState } from "react";

export default function TaskDashboard(props) {
  const [inputText, setInputText] = useState("");

  function handleAddBtn() {
    if (inputText === "") {
      alert("Missing input. Please fill in the required field.");
    } else {
      props.updateList(inputText);
      setInputText("");
    }
  } 

  return (
    <div className="taskdashboard">
      <input
        type="text"
        placeholder="Enter Your Tasks"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      <button onClick={handleAddBtn}>+</button>
    </div>
  );
}

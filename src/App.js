import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TaskDashboard from "./components/TaskDashboard";
import TaskList from "./components/TaskList";

function App() {
  const [addList, setAddList] = useState([]);

  let updateList = (inputText) => {
    setAddList([...addList, inputText]);
  };

  function deleteItem(key) {
    let newList = [...addList];
    newList.splice(key, 1);
    setAddList([...newList]);
  }

  return (
    <>
      <Header />
      <TaskDashboard updateList={updateList} />
      <h2 id='todo-header'>TODO</h2>
      <hr />
      {addList.map((listItem, i) => {
        return (
          <TaskList key={i} item={listItem} delete={deleteItem} index={i} />
        );
      })}
    </>
  );
}

export default App;

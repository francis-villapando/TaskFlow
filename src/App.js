import React, { useState } from "react";
import AppNavbar from "./components/Navbar";
import TaskListView from "./components/TaskListView";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <AppNavbar />
      <div className="container mt-4">
        <TaskForm addTask={addTask} />
        <TaskListView tasks={tasks} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;

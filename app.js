import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppNavbar from './components/Navbar'; // Correct name used
import TaskListView from './components/TaskListview'; // Ensure file name and import name match
import AddTaskView from './components/AddTaskView'; // Make sure this component exists

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route 
          path="/" 
          element={<TaskListView tasks={tasks} deleteTask={deleteTask} />} 
        />
        <Route 
          path="/add" 
          element={<AddTaskView addTask={addTask} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

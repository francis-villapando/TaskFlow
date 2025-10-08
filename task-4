import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTaskView({ addTask }) {
  // Local state for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const navigate = useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs (optional)
    if (!title.trim()) {
      alert('Please enter a task title');
      return;
    }

    // Build task object
    const newTask = {
      id: Date.now(), // simple unique id
      title,
      description,
      priority,
    };

    // Call addTask from props
    addTask(newTask);

    // Navigate back to the task list (home)
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Description
          </label>
          <textarea
            id="taskDescription"
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Priority */}
        <div className="mb-3">
          <label htmlFor="taskPriority" className="form-label">
            Priority
          </label>
          <select
            id="taskPriority"
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTaskView;

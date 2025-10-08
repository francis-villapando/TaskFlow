import React from "react";
import { Table, Button } from "react-bootstrap";

function TaskListView({ tasks, deleteTask }) {
  return (
    <div className="container mt-4">
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one!</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default TaskListView;

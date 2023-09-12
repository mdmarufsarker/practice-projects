import React from "react";
import styles from "./ShowTask.module.css";

const ShowTask = ({ tasks, toggleTask, editTask, deleteTask }) => {
  return (
    <div className={styles.container}>
      <h3>You have {tasks.length} Tasks</h3>
      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => {
            return (
              <div key={task.id} className={styles.task}>
                <p
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </p>
                <div className={styles.btnGroup}>
                  <button onClick={() => toggleTask(task.id)}>Completed</button>
                  <button onClick={() => editTask(task.id)}>Edit</button>
                  <button onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </ul>
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
};

export default ShowTask;

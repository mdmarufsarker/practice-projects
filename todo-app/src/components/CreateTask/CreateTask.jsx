import { useState } from "react";
import styles from "./CreateTask.module.css";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text){
      addNewTask(text);
      setText("");
    }else{
      alert("Please enter a task");
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter your task"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Create Task</button>
    </div>
  );
};

export default CreateTask;

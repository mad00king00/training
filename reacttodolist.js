"use client";
import { useState } from "react";
import "./reacttodolist.css";


export default function TodoApp() { 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  function addTodo() {
    if (inputText.trim() === "") return;


    setTodos([...todos, inputText.trim()]);
    setInputText("");
  }


  function deleteTodo(index) {
    const remaining = todos.filter((_, i) => i !== index);
    setTodos(remaining);
  }


  function editTodo(index) {
    const currentText = todos[index];
    const updatedText = prompt("Change your task:", currentText);
    if (updatedText !== null && updatedText.trim() !== "") {
      const updatedList = [...todos];
      updatedList[index] = updatedText.trim();
      setTodos(updatedList);
    }
  }


  return (
    <div className="todo-container">
      <h2>My To-Do List</h2>


      <div className="input-section">
        <div className="forwrap">
          <p>To Do Items:</p>
        </div>
        <div className="forwrap">
          <input
            type="text"
            name="name"
            placeholder="Enter a to-do item..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={addTodo}>Add to List</button>
        </div>
      </div>


      {todos.length > 0 && (
        <table className="todo-table">
          <thead>
            <tr>
              <th>To-Do Things</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => (
              <tr key={index}>
                <td>{item}</td>
                <td>
                  <button onClick={() => editTodo(index)}>Edit</button>
                  <button onClick={() => deleteTodo(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}   

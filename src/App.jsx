import { useState } from "react";
import "./styles.css";
import { TodoItem } from "./todo";

export default function App() {
  const [newItem, SetNewItem] = useState("");
  const [todos, SetTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    SetTodos(currentTodos =>{
     return[
       ...currentTodos,
      {id:crypto.randomUUID(),title : newItem,
      completed : false},
     ]
    });
    SetNewItem("");
  }
  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onInput={(e) => SetNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

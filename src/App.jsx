import { useState } from "react"
import "./styles.css"

export default function App(){
  const [newItem , SetnewItem] = useState("");
  const [todos,SetTodo] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    SetTodo(currentTodos =>{
      return[
        ...currentTodos, {id:crypto.randomUUID(),title : newItem,
        completed : false}
      ]
    });
    SetnewItem("");
  }

  function toggleTodo(id,completed){
    SetTodo(currentTodos=>{
      return currentTodos.map(todo =>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }

  function DeleteTodo(id){
    SetTodo(currentTodos=>{
      return currentTodos.filter(todo => todo.id !==id);
    })
  }

  return ( 
  <>
  <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">
        New Item
      </label>
      <input 
      value={newItem}
      onInput={(e)=>SetnewItem(e.target.value)}
      type="text" id="item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    {todos.length===0&&"No todos"}
    {todos.map(todo=>{
      return (
      <li key={todo.id}>
        <label>
          <input 
          type="checkbox" 
          checked={todo.completed}
          onChange={e=>toggleTodo(todo.id,e.target.checked)}
          />
          {todo.title}
          </label>
          <button className="btn btn-danger" onClick={()=>DeleteTodo(todo.id)}>Delete</button>
      </li>
    )
    })}
  </ul>
 </>
  )
}

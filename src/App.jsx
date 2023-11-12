import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App(){
 const [todos,SetTodo] = useState(()=>{
  const localValue = localStorage.getItem("ITEMS")
  if(localValue==null) return[]
  
  return JSON.parse(localValue)
 });

 useEffect(()=>{
  localStorage.setItem("ITEMS",JSON.stringify(todos))
 },[todos])

  function addTodo(title){
     SetTodo(currentTodos =>{
      return[
        ...currentTodos, {id:crypto.randomUUID(),title,completed : false}
      ]
    });
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
  <NewTodoForm addTodo={addTodo}/>
  <h1 className="header">Todo List</h1>
  <TodoList todos={todos} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo} />
 </>
  )
}

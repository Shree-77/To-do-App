import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export function TodoList({todos , toggleTodo,DeleteTodo}){

    return(
        <ul className="list">
    {todos.length===0&&"No todos"}
    {todos.map(todo=>{
      return (
      <TodoItem key={todo.id} id={todo.id} title={todo.title} completed = {todo.completed} toggleTodo={toggleTodo} DeleteTodo={DeleteTodo} />
    )
    })}
  </ul>
    )
}

TodoList.propTypes = {
  todos: PropTypes.func.isRequired,
  toggleTodo:PropTypes.func.isRequired,
  DeleteTodo:PropTypes.func.isRequired,

};
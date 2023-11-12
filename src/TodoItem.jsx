import PropTypes from 'prop-types';

export function TodoItem({id,title,completed,toggleTodo,DeleteTodo}){
    return(
         <li>
        <label>
          <input 
          type="checkbox" 
          checked={completed}
        onChange={e=>toggleTodo(id,e.target.checked)}
          />
          {title}
          </label>
          <button className="btn btn-danger" 
        onClick={()=>DeleteTodo(id)}
          >Delete</button>
      </li>
    )
}

TodoItem.propTypes = {
  id: PropTypes.func.isRequired,
 title: PropTypes.func.isRequired,
 completed: PropTypes.func.isRequired,
  toggleTodo:PropTypes.func.isRequired,
  DeleteTodo:PropTypes.func.isRequired,

};
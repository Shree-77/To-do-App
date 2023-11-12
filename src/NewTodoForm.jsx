import { useState } from "react";
import PropTypes from 'prop-types';

export function NewTodoForm({addTodo}){
    
  const [newItem , SetnewItem] = useState("");
 
  function handleSubmit(e){
    e.preventDefault();
    if(newItem==="") return
    addTodo(newItem);
    SetnewItem("");
  }

    return(
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
    );

}

NewTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
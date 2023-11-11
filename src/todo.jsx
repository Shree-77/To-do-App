function TodoItem({todo}){

    const {completed,title}=todo;
    return (
         <li>
      <label htmlFor="">
        <input
         type="checkbox"
         defaultChecked={completed}
         />
        {title}
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    )
}
export {TodoItem};
import React from "react"



function ToDoItem(props) {
  return (
    <div className="todo-item">

    	<input type="checkbox"

     		checked={props.item.completed}
     		onChange={()=> {props.handleChnage(props.item.id,props.item.text)}}
     	/>
            <p> {props.item.text}</p>
    </div>
  )
}

export default ToDoItem
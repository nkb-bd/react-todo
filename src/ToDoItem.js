import React from "react"



function ToDoItem(props) {

	 const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        transition: "all 0.3s ease-in-out 0s"
    }

  return (
    <div className="todo-item">

    	<input type="checkbox"

     		checked={props.item.completed}
     		onChange={()=> {props.handleChnage(props.item.id,props.item.text)}}
     	/>
           
            <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
    </div>
  )
}

export default ToDoItem
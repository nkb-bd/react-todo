 import React from "react"


import ToDoItem from "./ToDoItem"

import todosData from "./todosData"



class App extends React.Component {

  constructor () {

      super()
      this.state = {

          todos:todosData
      }
      this.handleChnage = this.handleChnage.bind(this)

  }

  handleChnage(id,txt){

    console.log(id);
    console.log(txt);

    this.setState(
        prevState =>{
            const updatedTodos = prevState.todos.map(todo =>{
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })

            return {
                todos : updatedTodos
            }
        })
  }

  render () {

    
      const todoItems = this.state.todos.map(item => <ToDoItem  key={item.id} item={item} handleChnage={this.handleChnage}/>)

      return (
        <div className="todo-list">


         {todoItems}

        </div>
      )
  }

 
}

export default App
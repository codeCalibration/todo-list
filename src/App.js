import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";

function AddId() {
  let i = 0
  return (i++);
}

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.completesetTodos(newTodos)
}

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: 1, name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  
function handleClearTodos() {
  const newTodos=todos.filter(todo => !todo.complete)
  setTodos(newTodos)
}

  return (
    <>
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}/> Add Todo
      <button onClick={handleClearTodos}/> Clear Completed Todos
      <div>{todos.filter(todo=>!todo.complete).length} left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App;
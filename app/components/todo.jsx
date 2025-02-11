"use client"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "@/app/features/todo/todoSlice"

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            Delete Todo
          </button>
        </li>
      ))}
    </>
  )
}

export default Todos

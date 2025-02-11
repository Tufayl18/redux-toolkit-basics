"use client"
import Todos from "./components/todo"
import AddTodo from "./components/addTodo"
export default function Home() {
  return (
    <>
      <Todos />
      <AddTodo />
    </>
  )
}

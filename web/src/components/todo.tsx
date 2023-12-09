import { Todo } from "@/interfaces/todo";
import { useState } from "react";

interface TodoProps {
  todo: Todo
}

export function TodoComponent({ todo }: TodoProps) {

  const [selectedTodo, setSelectedTodo] = useState<Todo>()

  return (
    <div className='flex justify-between'>
      <p>{todo.title}</p>

      <div className='flex gap-4'>
        <button className='text-green-300' onClick={() => console.log(todo.title)}>feito</button>
        <button className='text-red-300'>excluir</button>
      </div>
    </div>
  )
}
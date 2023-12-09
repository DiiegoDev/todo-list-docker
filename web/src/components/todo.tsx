import { Todo } from "@/interfaces/todo";
import { useState } from "react";

export function TodoComponent({ id, title }: Todo) {

  const [selectedTodo, setSelectedTodo] = useState<Todo>()

  return (
    <div className='flex justify-between' key={id}>
      <p>{title}</p>

      <div className='flex gap-4'>
        <button className='text-green-300'>feito</button>
        <button className='text-red-300'>excluir</button>
      </div>
    </div>
  )
}
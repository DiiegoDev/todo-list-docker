import { Todo } from "@/interfaces/todo";
import { useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query"
import { updateTodo } from "@/api/updateTodo";
import { UpdateTodoProps } from "@/interfaces/updateTodo";
import { queryClient } from "@/reactQueryProvider";

interface TodoProps {
  todo: Todo
}

export function TodoComponent({ todo }: TodoProps) {

  const [selectedTodo, setSelectedTodo] = useState<Todo>();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UpdateTodoProps) => updateTodo(data),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["todos"]})
  });

  const handleClick = () => {
    setSelectedTodo(todo);
    const isCompleted = todo.isCompleted ? false : true;
    const id = todo.id;
    console.log(id, isCompleted);
    mutateAsync({ isCompleted, id });
  }

  return (
    <div className='flex justify-between'>
      <p className={`${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</p>

      <div className='flex gap-4'>
        <button className='text-green-300' onClick={handleClick}>feito</button>
        <button className='text-red-300'>excluir</button>
      </div>
    </div>
  )
}
import { Todo } from "@/interfaces/todo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";

interface TodoProps {
  todo: Todo
}

export function TodoComponent({ todo }: TodoProps) {

  const { mutateAsyncUpdate } = useUpdateTodo();
  const { mutateAsyncDelete } = useDeleteTodo();

  const handleClickUpdate = () => {
    const isCompleted = todo.isCompleted ? false : true;
    const id = todo.id;
    mutateAsyncUpdate({ isCompleted, id });
  }

  const handleClickDelete = () => {
    mutateAsyncDelete(todo.id);
  }

  return (
    <div className='flex justify-between'>
      <p className={`${todo.isCompleted ? "line-through" : ""}`}>{todo.title}</p>

      <div className='flex gap-4'>
        <button className='text-green-300' onClick={handleClickUpdate}>feito</button>
        <button className='text-red-300' onClick={handleClickDelete}>excluir</button>
      </div>
    </div>
  )
}
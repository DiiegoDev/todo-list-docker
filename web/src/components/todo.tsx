import { Todo } from "@/interfaces/todo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { Check, Trash2 } from "lucide-react";

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
    <div className='flex justify-between items-center'>
      <p className={`${todo.isCompleted ? "line-through" : ""} text-sm`}>{todo.title}</p>

      <div className='flex gap-2'>
        <button className='p-2 rounded bg-green-300 text-gray-950' onClick={handleClickUpdate}>
          <Check size={18}/>
        </button>

        <button className='p-2 rounded bg-red-300 text-gray-950' onClick={handleClickDelete}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
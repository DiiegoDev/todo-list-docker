'use client'

import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { Check, Trash2 } from "lucide-react";
import { Spinner } from "@nextui-org/react";
import { TodoButton } from "./button";
import { Todo } from "@/interfaces/todo";
import { Skeleton } from "./ui/skeleton";

interface TodoProps {
  todo: Todo;
  isPending: boolean;
}


export function TodoComponent({ todo, isPending }: TodoProps) {

  const { mutateAsyncUpdate, isPendingUpdate } = useUpdateTodo();
  const { mutateAsyncDelete, isPendingDelete } = useDeleteTodo();

  const handleClickUpdate = (todo: Todo) => {
    const isCompleted = todo.isCompleted ? false : true;
    const id = todo.id;
    mutateAsyncUpdate({ isCompleted, id });
  }

  console.log(isPending);

  const handleClickDelete = () => {
    mutateAsyncDelete(todo.id);
  }
  
  return (
  
    
         <div key={todo.id} className='flex justify-between items-center'>
           <p className={`${todo.isCompleted ? "line-through" : ""} text-sm`}>{todo.title}</p>
   
         <div className='flex gap-1'>
           <TodoButton.Root 
           color="green" 
           onClick={handleClickUpdate}
           todo={todo}
           >
          
             <TodoButton.Icon 
             icon={Check} 
             size={16} 
             isPending={isPendingUpdate} 
             spinner={Spinner}/>
           </TodoButton.Root>
   
           <TodoButton.Root 
           color="red" 
           onClick={handleClickDelete}
           todo={todo}
           >
             <TodoButton.Icon 
             icon={Trash2} 
             size={16} 
             isPending={isPendingDelete} 
             spinner={Spinner}/>
           </TodoButton.Root>
         </div>
       </div>
  )
}
'use client'

import {  FormComponent } from '@/components/form';
import { TodoComponent } from '@/components/todo';
import { useGetTodos } from '@/hooks/useGetTodos';

export default function Home() {

  const { data, isPending, isError } = useGetTodos();

  if(isPending) {
    return <p>loading...</p>
  }

  return (
   
    <main className="flex flex-col gap-8 items-center py-14">
      <FormComponent />

      <div className='min-w-[333px] flex flex-col gap-4'>
       
         {data?.map((todo) => {
          return (
            <TodoComponent
              key={todo.id}
              todo={todo}
            />
          )
         })}
        </div>
    
    </main>
   
  )
}

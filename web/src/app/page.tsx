'use client'

import {  FormComponent } from '@/components/form';
import { TodoComponent } from '@/components/todo';
import { Todo } from '@/interfaces/todo';
import { useQuery } from '@tanstack/react-query';

export default function Home() {

  const fetchTodos = (): Promise<Todo[]> => 
    fetch('http://localhost:8080/list-all').then(
        (res) => res.json())
  

  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })

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

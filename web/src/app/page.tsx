'use client'

import {  FormComponent } from '@/components/form';
import { TodoComponent } from '@/components/todo';
import { Skeleton } from '@/components/ui/skeleton';
import { useGetTodos } from '@/hooks/useGetTodos';

export default function Home() {

  const { data, isPending } = useGetTodos()

  const conditionalRender = () => {
    if(isPending) {
      return(
        <div className='w-[294px] flex flex-col gap-3'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )
    } 

    return(
      <div className='min-w-[294px] flex flex-col gap-4'>
        {data?.map(todo => (
          <TodoComponent key={todo.id} todo={todo} isPending={isPending}/>
        ))}
      </div>
    )
  }

  return (
   
    <main className="flex flex-col gap-8 items-center py-14">
      <FormComponent />

      {conditionalRender()}
    </main>
   
  )
}

'use client'

import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  //createdAt: Date;
}

export default function Home() {
  const [title, setTitle] = useState<string | null>(null)

  const fetchTodos = (): Promise<Todo[]> => 
    fetch('http://localhost:8080/list-all').then(
        (res) => res.json())
  

  const { isPending, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  })


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title)
    setTitle(null);
  }

  if(isPending) {
    return <p>loading...</p>
  }

  return (
   
    <main className="flex flex-col gap-8 items-center py-14">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input onChange={handleChange} className="bg-transparent border border-gray-200 rounded-md px-3 py-1" type="text" name="title" id="title" />
        <button type="submit" >Adicionar</button>
      </form>

      <div className='min-w-[333px]'>
        <div className='flex flex-col gap-4'>
         {data?.map((todo) => {
          return (
            <div className='flex justify-between' key={todo.id}>
              <p>{todo.title}</p>

              <div className='flex gap-4'>
                <button className='text-green-300'>feito</button>
                <button className='text-red-300'>excluir</button>
              </div>
            </div>
          )
         })}
        </div>
      </div>
    </main>
   
  )
}

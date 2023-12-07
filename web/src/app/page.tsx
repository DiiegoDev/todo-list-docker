'use client'

import { ChangeEvent, FormEvent, useState } from 'react';

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  createdAt: Date;
}

export default function Home() {
  const [title, setTitle] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title)
    setTitle(null);
  }

  return (
    <main className="flex flex-col gap-8 items-center py-14">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input onChange={handleChange} className="bg-transparent border border-gray-200 rounded-md px-3 py-1" type="text" name="title" id="title" />
        <button type="submit" >Adicionar</button>
      </form>

      <div className='min-w-[333px] flex flex-col gap-6'>
        <div className='flex justify-between'>
          <p>teste</p>
          <div className='flex gap-4'>
            <button>feito</button>
            <button>excluir</button>
          </div>
        </div>
      </div>
    </main>
  )
}

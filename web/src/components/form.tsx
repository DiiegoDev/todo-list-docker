'use client'

import { useCreateTodo } from "@/hooks/useCreateTodo";
import { ChangeEvent, FormEvent, useState } from "react";
import { Plus } from "lucide-react";
import { Spinner } from "@nextui-org/react";

export function FormComponent() {

  const [title, setTitle] = useState<string>("");

  const { mutateAsync, isPending } = useCreateTodo();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(title);
    setTitle("");
  };

  const condionalRender = () => {
    if(isPending) {
      return <Spinner size="sm" color="default" />
    }

    return <Plus color="black"/>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input 
      onChange={handleChange}
      value={title} 
      className="h-10 bg-transparent border border-gray-200 rounded-md px-3" 
      type="text" 
      name="title" 
      id="title" 
      required
      />
      <button className="w-10 h-10 flex justify-center items-center rounded bg-blue-300 hover:bg-blue-400 transition" type="submit">
        {condionalRender()}
      </button>
    </form>
  )
}
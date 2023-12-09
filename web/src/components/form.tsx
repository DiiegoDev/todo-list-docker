import { createTodo } from "@/api/createTodo";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";

const queryClient = new QueryClient();

export function FormComponent() {

  const [title, setTitle] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["todos"]})
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(title);
    setTitle('');
  };

  return (
    <form onSubmit={ handleSubmit } className="flex gap-4">
      <input 
      onChange={handleChange}
      value={title} 
      className="bg-transparent border border-gray-200 rounded-md px-3 py-1" 
      type="text" 
      name="title" 
      id="title" 
      required
      />
      <button type="submit" >adicionar</button>
    </form>
  )
}
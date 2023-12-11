import { useCreateTodo } from "@/hooks/useCreateTodo";
import { ChangeEvent, FormEvent, useState } from "react";
import { Plus } from "lucide-react";

export function FormComponent() {

  const [title, setTitle] = useState<string>("");

  const { mutateAsync } = useCreateTodo();
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input 
      onChange={handleChange}
      value={title} 
      className="bg-transparent border border-gray-200 rounded-md px-3 py-2" 
      type="text" 
      name="title" 
      id="title" 
      required
      />
      <button className="p-2 rounded bg-blue-300 hover:bg-blue-400 transition" type="submit">
        <Plus color="black"/>
      </button>
    </form>
  )
}
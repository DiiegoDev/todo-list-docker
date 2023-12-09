import { ChangeEvent, FormEvent, useState } from "react";

export function FormComponent() {

  const [title, setTitle] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <input onChange={handleChange} value={title} className="bg-transparent border border-gray-200 rounded-md px-3 py-1" type="text" name="title" id="title" />
      <button type="submit" >adicionar</button>
    </form>
  )
}
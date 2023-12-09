import { UpdateTodoProps } from "@/interfaces/updateTodo";

export async function updateTodo(data: UpdateTodoProps) {

  const {id, isCompleted} = data;

  const url = `http://localhost:8080/update/${id}`;

  await fetch(url, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ isCompleted })
  });
}
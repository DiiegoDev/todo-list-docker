import { api } from "@/api";
import { Todo } from "@/interfaces/todo";
import { useQuery } from "@tanstack/react-query";

async function getTodos() {
  try {
    const response = await api.get("/list-all");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function useGetTodos() {
  const { data, isPending, isError } = useQuery<Todo[] | undefined>({
    queryKey: ["todos"],
    queryFn: getTodos
  });

  return { data, isPending, isError };
}
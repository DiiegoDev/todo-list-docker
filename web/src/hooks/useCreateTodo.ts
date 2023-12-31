import { api } from "@/api";
import { queryClient } from "@/providers/reactQueryProvider";
import { useMutation } from "@tanstack/react-query";

async function createTodo(title: string) {
  try {
    await api.post("/create", { title });
  } catch (error) {
    console.log(error);
  }
}

export function useCreateTodo() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (title: string) => createTodo(title),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
  });

  return { mutateAsync, isPending };
}
import { api } from "@/api";
import { queryClient } from "@/providers/reactQueryProvider";
import { useMutation } from "@tanstack/react-query";

async function deleteTodo(id: string) {
  try {
    await api.delete(`/delete/${id}`);
  } catch (error) {
      console.log(error); 
  }
}

export function useDeleteTodo() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (id: string) => deleteTodo(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
  });

  const mutateAsyncDelete = mutateAsync;
  const isPendingDelete = isPending;

  return { mutateAsyncDelete, isPendingDelete };
}
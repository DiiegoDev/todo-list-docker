import { api } from "@/api";
import { UpdateTodoProps } from "@/interfaces/updateTodo";
import { queryClient } from "@/providers/reactQueryProvider";
import { useMutation } from "@tanstack/react-query";

async function updateTodo(data: UpdateTodoProps) {
  try {
    const { id, isCompleted } = data;
    await api.patch(`/update/${id}`, { isCompleted });
  } catch (error) {
      console.log(error); 
  }
}

export function useUpdateTodo() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: UpdateTodoProps) => updateTodo(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] })
  });

  const mutateAsyncUpdate = mutateAsync;
  const isPendingUpdate = isPending;

  return { mutateAsyncUpdate, isPendingUpdate };
}
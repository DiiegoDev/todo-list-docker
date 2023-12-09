const url = "http://localhost:8080/create"

export async function createTodo(title: string) {
  await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      // Outros headers, se necessário
    },
    body: JSON.stringify({ title })
  });

  // if(!response.ok) throw new Error("Erro ao criar tarefa.");

  // return response.json();
}
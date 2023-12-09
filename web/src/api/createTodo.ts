const url = "http://localhost:8080/create"

export async function createTodo(title: string) {
  await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title })
  });
}
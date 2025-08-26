export async function login(email, password) {
  const res = await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json().catch(()=> ({}));
  if (!res.ok) {
    throw new Error(data?.detail || 'Incorrect username or password');
  }
  return data.user;
}

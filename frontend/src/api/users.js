export async function listUsers({ q, limit = 50, skip = 0 } = {}) {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (limit) params.set('limit', limit);
  if (skip) params.set('skip', skip);
  const res = await fetch(`/api/users?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

export async function getUser(id) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}

export async function getUserByEmail(email) {
  const res = await fetch(`/api/users/by-email/${encodeURIComponent(email)}`);
  if (!res.ok) throw new Error('User not found');
  return res.json();
}

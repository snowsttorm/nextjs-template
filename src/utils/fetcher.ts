export const fetcher = async (
  url: string | URL | Request | undefined,
  options: RequestInit = {}
) => {
  if (!url) {
    throw new Error('URL is required');
  }
  const res = await fetch(url, {
    credentials: 'include',
    ...options,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message || `HTTP error! status: ${res.status}`);
  }
  return await res.json();
};

export async function fetchPersonData() {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_API_TOKEN;

  if (!url || !token) {
    console.error("API_URL and API_TOKEN environment variables are required.");
    throw new Error("Missing environment variables");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching person data:", error);
    throw new Error("Error fetching person data");
  }
}

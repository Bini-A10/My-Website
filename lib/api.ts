export async function fetchAPI(endpoint: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/${endpoint}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

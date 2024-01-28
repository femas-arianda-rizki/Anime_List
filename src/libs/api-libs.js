export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

// export const getNestedAnimeResponse = async (resource, objectProperty) => {
//   const response = await getAnimeResponse(resource);
//   return response.data.flatMap(item => item.entry)
// };

// export const getNestedAnimeResponse = async (resource, objectProperty) => {
//   const response = await getAnimeResponse(resource);
//   return response.data.map(item => item.entry).flat();
// };

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  if (response.data === undefined) {
    console.log("Invalid response data");
  }
  return response.data.flatMap(item => item.entry);
};

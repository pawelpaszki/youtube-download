export const getSearchResults = (query) => {
  return fetch(
    `http://localhost:8080/p?id=${query}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};
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

export const download = (link, name) => {
  return fetch('http://localhost:8080/', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ link: link, name: name })
  }).then((response) => {
    return response;
  })
    .catch((error) => {
      throw error
    });
};
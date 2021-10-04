function fetchPokemon(name) {
  return fetch(`https://pixabay.com/api/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет покемона с именем ${name}`));
  });
}

const api = {
  fetchPokemon,
};

export default api;

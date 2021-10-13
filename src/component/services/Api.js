function fetchImages(text, page, per_page = 12, API_KEY = '22963284-23f543f8627e95ac39317c785') {
  return fetch(
    `https://pixabay.com/api/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    // return Promise.reject(new Error('No response from server'));
  });
}

const imagesAPI = { fetchImages };

export default imagesAPI;

// // Select the films list element from the HTML page
const filmsList = document.querySelector('#films ul');

// Make a request to the Star Wars API for a list of films
fetch('https://swapi.dev/api/films/')
  // Parse the response as JSON
  .then(response => response.json())
  // Iterate over the results and create a list item and link element for each film
  .then(data => {
    data.results.forEach(film => {
      // Create a list item element
      const listItem = document.createElement('li');
      // Create a link element
      const link = document.createElement('a');
      // Set the link's href attribute to '#'
      link.href = '#';
      // Set the link's text content to the film's title
      link.textContent = film.title;
      // Add an event listener to the link that retrieves and displays the film's data when clicked
      link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default link behavior
        // Retrieve the film's data and display it on the page
        displayFilmData(film);
      });
      // Append the link to the list item
      listItem.appendChild(link);
      // Append the list item to the films list
      filmsList.appendChild(listItem);
    });
  });
// Function to retrieve and display the film's data
function displayFilmData(film) {
  // Retrieve the film data element from the HTML page
  const filmData = document.querySelector('#film-data');
  // Clear the film data element
  filmData.innerHTML = '';
  // Add the film's title to the film data element
  filmData.innerHTML += `<h2>${film.title}</h2>`;
  // Add the film's other data to the film data element
  filmData.innerHTML += `<p>Release date: ${film.release_date}</p>`;
  filmData.innerHTML += `<p>Director: ${film.director}</p>`;
  filmData.innerHTML += `<p>Producer(s): ${film.producer}</p>`;
  filmData.innerHTML += `<p>Opening crawl:</p><p>${film.opening_crawl}</p>`;
}

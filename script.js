// // // Select the films list element from the HTML page
// const filmsList = document.querySelector('#films ul');

// // Make a request to the Star Wars API for a list of films
// fetch('https://swapi.dev/api/films/')
//   // Parse the response as JSON
//   .then(response => response.json())
//   // Iterate over the results and create a list item and link element for each film
//   .then(data => {
//     data.results.forEach(film => {
//       // Create a list item element
//       const listItem = document.createElement('li');
//       // Create a link element
//       const link = document.createElement('a');
//       // Set the link's href attribute to '#'
//       link.href = '#';
//       // Set the link's text content to the film's title
//       link.textContent = film.title;
//       // Add an event listener to the link that retrieves and displays the film's data when clicked
//       link.addEventListener('click', event => {
//         event.preventDefault(); // Prevent the default link behavior
//         // Retrieve the film's data and display it on the page
//         displayFilmData(film);
//       });
//       // Append the link to the list item
//       listItem.appendChild(link);
//       // Append the list item to the films list
//       filmsList.appendChild(listItem);
//     });
//   });
// // Function to retrieve and display the film's data
// function displayFilmData(film) {
//   // Retrieve the film data element from the HTML page
//   const filmData = document.querySelector('#film-data');
//   // Clear the film data element
//   filmData.innerHTML = '';
//   // Add the film's title to the film data element
//   filmData.innerHTML += `<h2>${film.title}</h2>`;
//   // Add the film's other data to the film data element
//   filmData.innerHTML += `<p>Release date: ${film.release_date}</p>`;
//   filmData.innerHTML += `<p>Director: ${film.director}</p>`;
//   filmData.innerHTML += `<p>Producer(s): ${film.producer}</p>`;
//   filmData.innerHTML += `<p>Opening crawl:</p><p>${film.opening_crawl}</p>`;
// }

// app.js



const charactersList = document.getElementById('characters');
const modal = document.createElement('div');

// Set up the modal element
modal.classList.add('modal');
modal.innerHTML = `
  <div class="modal-content">
    <div class="modal-header">
      <h2 id="modal-character-name"></h2>
    </div>
    <div class="modal-body">
      <p id="modal-character-height"></p>
      <p id="modal-character-mass"></p>
      <p id="modal-character-hair-color"></p>
      <p id="modal-character-skin-color"></p>
      <p id="modal-character-eye-color"></p>
      <p id="modal-character-birth-year"></p>
      <p id="modal-character-gender"></p>
    </div>
    <div class="modal-footer">
      <button id="modal-close-button">Close</button>
    </div>
  </div>
`;
document.body.appendChild(modal);

// Close the modal when the close button is clicked
const closeButton = document.getElementById('modal-close-button');
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Make a request to the SWAPI API to get a list of characters
fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    // data.results contains the list of characters
    const characters = data.results;
    // Iterate over the list of characters and create a list item for each character
    characters.forEach(character => {
      const listItem = document.createElement('li');
      listItem.classList.add('character');
      listItem.innerHTML = `<h3 class="character-name">${character.name}</h3>`;
      // Attach an event listener to the list item to show the modal when clicked
      listItem.addEventListener('click', () => {
        // Display the modal
        modal.style.display = 'block';
        // Update the modal content with the character's details
        document.getElementById('modal-character-name').textContent = character.name;
        document.getElementById('modal-character-height').textContent = `Height: ${character.height} cm`;
        document.getElementById('modal-character-mass').textContent = `Mass: ${character.mass} kg`;
        document.getElementById('modal-character-hair-color').textContent = `Hair color: ${character.hair_color}`;
        document.getElementById('modal-character-skin-color').textContent = `Skin color: ${character.skin_color}`;
        document.getElementById('modal-character-eye-color').textContent = `Eye color: ${character.eye_color}`;
        // app.js (continued)

// ...
document.getElementById('modal-character-birth-year').textContent = `Birth year: ${character.birth_year}`;
document.getElementById('modal-character-gender').textContent = `Gender: ${character.gender}`;

      } ) } ) } )
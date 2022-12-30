async function getCharacters() {
  let characters = []; // Create an empty array to store the characters
  let nextUrl = 'https://swapi.dev/api/people'; // Set the URL for the first page of results
  while (nextUrl) {
    // Make a request to the API
    const response = await fetch(nextUrl);
    const data = await response.json();
    // Add the characters from the current page to the array
    characters = characters.concat(data.results);
    // Set the URL for the next page of results, or null if there are no more pages
    nextUrl = data.next ? data.next : null;
  }
  // Build an HTML string for the list of characters
  let html = '<ul>';
  characters.forEach(character => {
    html += `<li>${character.name}</li>`;
  });
  html += '</ul>';
  // Insert the HTML string into the div element
  document.getElementById('text').innerHTML = html;
}

getCharacters(); // Call the function to retrieve all characters

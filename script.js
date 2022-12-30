// app.js

// app.js

fetch('https://swapi.dev/api/people')
  .then(response => response.json())
  .then(data => {
    // data.results contains the list of characters
    const characters = data.results;
    // Build an HTML string for the list of characters
    let html = '<ul>';
    characters.forEach(character => {
      html += `<li>${character.name}</li>`;
    });
    html += '</ul>';
    // Insert the HTML string into the div element
    document.getElementById('text').innerHTML = html;
  });


const filmsList = document.querySelector('#films ul');

fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(film => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = film.title;
      listItem.appendChild(link);
      filmsList.appendChild(listItem);
    }
    );
  }
  );

const repositoriesContainer = document.getElementById('repositories');

fetch('https://api.github.com/users/funnyman11/repos')
  .then(response => response.json())
  .then(data => {
    data.forEach(repository => {
      const repoElement = document.createElement('div');
      repoElement.classList.add('repository');

      const titleElement = document.createElement('h2');
      titleElement.textContent = repository.name;
      repoElement.appendChild(titleElement);

      repositoriesContainer.appendChild(repoElement);
    });
  })
  .catch(error => {
    console.log(error)
  });

function getJoke() {
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      document.getElementById('jokeText').innerText = data.setup + " - " + data.punchline;
    });
}

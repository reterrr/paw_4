// Select buttons and the joke display container
const lameButton = document.getElementById('lame-random');
const funnyButton = document.getElementById('funny-random');
const jokeDisplay = document.getElementById('joke-display');

// Base URL for the backend API
const BASE_URL = 'localhost:3000';

// Function to fetch and display a joke
async function fetchJoke(category) {
  try {
    // Fetch joke from backend
    const response = await fetch(`${BASE_URL}/jokebook/joke/${category}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Parse the response JSON
    const joke = await response.json();

    // Display the joke in the joke container
    jokeDisplay.innerHTML = `
      <p><strong>Joke:</strong> ${joke.joke}</p>
      <p><strong>Response:</strong> ${joke.response}</p>
    `;
  } catch (error) {
    // Display error message
    jokeDisplay.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

// Add event listeners to the buttons
lameButton.addEventListener('click', () => fetchJoke('lameJoke'));
funnyButton.addEventListener('click', () => fetchJoke('funnyJoke'));


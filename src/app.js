alert("hellow world!");

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // Parses the response body as JSON
  .then(data => console.log(data)) // Handles the resulting data
  .catch(error => console.error('Error fetching data:', error)); // Handles network errors


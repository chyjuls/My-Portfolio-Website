// Get references to the buttons
const indexButton = document.getElementById('index-button');
const profileButton = document.getElementById('profile-button');
const projectsButton = document.getElementById('projects-button');

// Add event listeners to the buttons
indexButton.addEventListener('click', () => {
  // Handle click on index button
  window.location.href = 'index.html';
});

profileButton.addEventListener('click', () => {
  // Handle click on profile button
  window.location.href = 'profile.html';
});

projectsButton.addEventListener('click', () => {
  // Handle click on projects button
  window.location.href = 'projects.html';
});

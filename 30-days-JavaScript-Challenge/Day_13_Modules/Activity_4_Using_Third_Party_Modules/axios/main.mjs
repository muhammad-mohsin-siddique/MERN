// Task 7: Install Third party module (e.g., lodash) using npm. Import and use this module to make a network request in a script


import axios from 'axios';

async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  
  try {
      const response = await axios.get(url);
      console.log('User Data:', response.data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Replace 'your-username' with the GitHub username you want to fetch data for
fetchUserData('muhammad-mohsin-siddique');
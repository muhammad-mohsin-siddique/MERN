// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch('https://api.github.com/invalid-url')
    .then((response) => {
        // Check if the response status is not OK (200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log('Data:', data);
    })
    .catch((error) => {
        console.error('Fetch error:', error.message);
    });


// Task 9: Use the fetch API to request data from an invalid URL within a async function and handle the error using try-catch. Log an appropriate error message to the console.

async function getGithubProfile() {
    try {
        console.log('async/await')
        const response = await fetch('https://api.github.com/users/muhammad-mohsin-siddique');
        const data = await response.json();
        if (data.status === '404') {
            throw 'Not Found';
        } else {
            console.log(data);
        }
    } catch (error) {
        console.error(error);
    }
}

getGithubProfile();
// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit and one special charater). Log whether the password is valid or not

let passwordValidator = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*()_+!~`|;:,.?/\-])[A-Za-z\d@#$%^&*()_+!~`|;:,.?/\-]{8,}$/

let password = '12qw!@3$acAS';

console.log(password.match(passwordValidator));



// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid or not

const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(:[0-9]{1,5})?(\/[^\s]*)?$/i;

const urls = [
    'https://www.example.com',
    'http://example.com:8080/path/to/resource',
    'ftp://example.com', // Invalid for this regex
    'https://example.com',
    'www.example.com', // Invalid for this regex
    'example.com',
    'http://example',
    'https://example.com/path?query=param'
];

urls.forEach(url => {
    if (urlRegex.test(url)) {
        console.log(`Valid URL: ${url}`);
    } else {
        console.log(`Invalid URL: ${url}`);
    }
});


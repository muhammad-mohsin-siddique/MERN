// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format  (e.g., (123) 456-7890). Log the captures

const phoneRegex = /(\d{3})[-\s]?(\d{3})[-\s]?(\d{4})|\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})/;

// let phoneNumber = '123-456-7890';

// phoneNumber = '(123)-456-7890';
// phoneNumber = '123 456 7890';
phoneNumber = '(123) 456-7890';
// phoneNumber = '(123) 456 7890';

match = phoneNumber.match(phoneRegex);
console.log(match);

if (match) {

    // console.log(match);

    if (match[1]) {

        // console.log(match[1]);

        console.log('Area Code:', match[1]);
        console.log('Central Office Code:', match[2]);
        console.log('Line Number:', match[3]);
    } else if (match[4]) {

        console.log('Area Code:', match[4]);
        console.log('Central Office Code:', match[5]);
        console.log('Line Number:', match[6]);
    }
}


// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures    .





const emailRegex = /^([\w][\w.\-_]+)@([\w.-]+\.[a-zA-Z]{2,})$/;

let email = 'ms1436151@gmail.com';

// email = 'username_123@example-domain.com';

// email = 'user.name-123@example.co.uk';

match = email.match(emailRegex);

if (match) {
    console.log(`Username: ${match[1]}`);
    console.log(`Domain: ${match[2]}`);
} else {
    console.log(match);
    console.log(`Enter a Valid Email Address: ${email}`);
}


// Task 9: Define a class Account with private fields for balance and a method to deposite and withdraw money. Ensure that the balance can only be updated through these methods

class Account {
    
    #balance = 0; // Private field for balance

    constructor(initialBalance = 0) {
        if (initialBalance >= 0) {
            this.#balance = initialBalance;
        } else {
            console.error("Initial balance cannot be negative.");
        }
    }
    getBalance() {
        return this.#balance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.error("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.error("Invalid withdraw amount or insufficient balance.");
        }
    }
}


// Task 10: Creat an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation

// Example usage
const myAccount = new Account(100); 
console.log(myAccount.getBalance()); // Output: 100

myAccount.deposit(50); // Output: Deposited: 50. New balance: 150
console.log(myAccount.getBalance()); // Output: 150

myAccount.withdraw(30); // Output: Withdrew: 30. New balance: 120
console.log(myAccount.getBalance()); // Output: 120

myAccount.withdraw(200); // Output: Invalid withdraw amount or insufficient balance.
console.log(myAccount.getBalance()); // Output: 120

myAccount.deposit(-20); // Output: Deposit amount must be positive.
console.log(myAccount.getBalance()); // Output: 120

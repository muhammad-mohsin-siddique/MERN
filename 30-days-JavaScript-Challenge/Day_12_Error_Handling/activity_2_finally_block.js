// Task 3: Write a script that includes a try-catch block and finally block. Log message in the try, catch, and finally block to observe the execution flow.

function executeWithErrorHandling() {
    try {
        console.log("Inside try block");
        throw new Error("An error occurred!");

        console.log("This will not be logged"); // Not rechable statement
        
    } catch (error) {
        console.log("Inside catch block");
        console.log("Caught error:", error.message);
    } finally {
        console.log("Inside finally block");
        
    }
}

// Call the function to see the output
executeWithErrorHandling();
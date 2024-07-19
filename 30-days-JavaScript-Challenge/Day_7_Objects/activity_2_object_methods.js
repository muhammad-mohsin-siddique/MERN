// Task 3: Add a method to the book object that return's a string with the book title and author and log the result of calling this method


const book = {
    title: 'New Revelations of the Americas Before Columbus',
    author: 'Charles C. Mann',
    year : 2005,
    getTitleAndAuthor:function(){
        return `Book Title: ${this.title} and the author is: ${this.author}`
    },
    updateYear: function(year){
        this.year = year;
    }
};


console.log(book.getTitleAndAuthor());


// Task 4: Add a method to the book object that takes a parameter (year) an updates the book's year property then log the updated object 


book.updateYear(2010);

console.log(book);



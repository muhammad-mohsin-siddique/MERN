// Task 7: Add a method to the book object that uses the 'this' ketyword to return a string with Book's title and year, and log the result of calling method


const book = {
    title: 'You Are A Goddess - Paperback',
    author: 'Sophie Bashford',
    year : 2018,
    getTitleAndAuthor:function(){
        return `Book Title: ${this.title} \nPublishing Year : ${this.year}`;
    }
}

console.log(book.getTitleAndAuthor());
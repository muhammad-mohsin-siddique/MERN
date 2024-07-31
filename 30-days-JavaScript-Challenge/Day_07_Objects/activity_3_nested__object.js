//Task 5: creat a nested object representing a libray with properties like name and books(an array of objects), and log the library object to the console 

const library = {
    name: 'Public Library Islamabad H-9/4',
    books: [
        {
        title: 'New Revelations of the Americas Before Columbus',
        author: 'Charles C. Mann',
        year : 2005,
        getTitleAndAuthor:function(){
            return `Book Title: ${this.title} \nThe author is: ${this.author} \nPublishing Year : ${this.year}`;
        }
    }, {
        title: 'You Are A Goddess - Paperback',
        author: 'Sophie Bashford',
        year : 2018,
        getTitleAndAuthor:function(){
            return `Book Title: ${this.title} \nThe author is: ${this.author} \nPublishing Year : ${this.year}`;
        }
    }, {
        title: 'Dangerous Love',
        author: 'Ben Okri',
        year : 1996,
        getTitleAndAuthor:function(){
            return `Book Title: ${this.title} \nThe author is: ${this.author} \nPublishing Year : ${this.year}`;
        }
    }  
    ]

}

console.log(library);

library.books.forEach((book)=>{
    console.log(book.getTitleAndAuthor());
});

// object: jar ekadik property thakbe.
// example:  user ekta object.
// user object er property, like:
// userName, userReview
// ekhon AbstractRange, userReview ekta object hote parent, 
// Jemon, reviewWriter, reviewTime etc. 

// object creation 
// var obj = {};
// var obj1 = new Object;
// console.log(obj);
// console.log(obj1);

var book = {
    // javascript e object mane=> key:value pair
    // key: value , 
    name: "functional javascript",
    author: "faisal",
    publisher: 'o\'Adarsha',
    page: 250,

    // object er vitore function declare korle, seta k bole: method
    print: function () {
        console.log(this.name, this.author);
    }
}
book.print(); // method call

// property access 
console.log("Book Name: " + book.name); // dot notation
console.log("Author Name: " + book['author']); // bracket notation

book.publishYear = 2010;
console.log("Publish Year: " + book.publishYear);

book['price'] = 30;
console.log("Price : " + book.price);

for (var props in book) {
    // object property and object property value
    console.log(props + " = " +book[props]);
}
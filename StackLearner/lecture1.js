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
    print: function(){
        console.log(this.name, this.author);
    }
}
book.print(); // method call 



let myObj = {
    bangladesh: "Dhaka",
    canada: "Ottawa",
    japan: "Tokyo",
    australia: "Canberra",
    germany: "Berlin"
}

// loop 
// for(element in myObj){
//     console.log(element);
// }


// // find value 
// for(element in myObj){
//     console.log(myObj[element]);
// }

// keys values 
// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));


// // make keys in an array 
// const countries = Object.keys(myObj);
// console.log(countries);

// // and map 
// const countryList = countries.map((singleCountry)=> {
//     return singleCountry.toUpperCase();
// })
// console.log(countryList);



// make values in an array 
const countries = Object.values(myObj);
console.log(countries);

// and map 
const countryList = countries.forEach((singleCountry)=> {
    console.log(singleCountry.toUpperCase());
})
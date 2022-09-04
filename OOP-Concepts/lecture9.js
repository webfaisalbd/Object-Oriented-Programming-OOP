var myObj = {
    name: "faisal",
    anotherObj : {
        name : "shajib",
        value : function() {
            console.log(this.name);
        }
    } 
}
myObj.anotherObj.value.call(myObj) // faisal



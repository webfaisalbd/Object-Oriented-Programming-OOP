var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
         console.log(this.name); // faisal
    },
    anotherObj : {
        name : "shajib",
        value : function() {
            console.log(this.name);
        }
    } 
}
myObj.anotherObj.value();


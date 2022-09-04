var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
         console.log(this.name); // faisal
    }
}
myObj.getDetails();


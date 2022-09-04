var myObj = {
    name: "faisal",
    getDetails: function(){
        let name= "ahmed";
         console.log(this.name); // faisal
    },
    getDetails2 : () => {
        let name= "shajib";
        console.log(this.name); // shajib
    }
}
myObj.getDetails2();


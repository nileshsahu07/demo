// this =>\

// let myObj  = {
//     name : "nilesh",
//     class : "12",
//     age : "8",
//     fullDetails: function(){
//         // console.log(this) //only this se pura obj show hota hai

//         console.log("First Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age)
//     }
// }

// myObj.fullDetails()



// js class=> class ke threw obj create karna

class Products{
    constructor(name,price,rating){
        this.name = name
        this.price = price
        this.rating = rating
    }
}
    let myfirstProduct = new Products("Iphone","999","4.5")
    mysecondProduct = new Products("Samsung","1999","4.6")

    console.log(myfirstProduct)
    console.log(mysecondProduct)

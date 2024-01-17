// call method => 1st way
// let myObj = {
//     name: "Nilesh",
//     class: "9",
//     age : "87",
//     fullDetails: function(){
//         console.log("Name:- "+this.name+" Class:-"+this.class+" Age:-"+this.age)
//     }
// }

// let secondObj = {
//     name: "Vinit",
//     class: "8",
//     age : "13"
// }

// myObj.fullDetails.call(myObj)
// myObj.fullDetails.call(secondObj)


// 2nd way
// let myObj = {
//     name: "Nilesh",
//     class: "9",
//     age : "87",
// }

// let details = function(){
//     console.log("Name:- "+this.name+" Class:-"+this.class+" Age:-"+this.age)
// }

// let secondObj = {
//     name: "Vinit",
//     class: "8",
//     age : "13"
// }

// details.call(myObj)
// details.call(secondObj)



//parameters with call method=>
// let myObj = {
//     name: "Nilesh",
//     class: "9",
//     age : "87",
// }

// let details = function(address,pincode){
//     console.log("Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age+" Address:- "+address+" Pincode:- "+pincode)
// }

// let secondObj = {
//     name: "Vinit",
//     class: "8",
//     age : "13"
// }

// details.call(myObj,"Jaipur","302050")
// details.call(secondObj,"Tonk","304001")



//parameters with apply method=>
// let myObj = {
//     name: "Nilesh",
//     class: "9",
//     age : "87",
// }

// let details = function(address,pincode){
//     console.log("Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age+" Address:- "+address+" Pincode:- "+pincode)
// }

// let secondObj = {
//     name: "Vinit",
//     class: "8",
//     age : "13"
// }

// details.apply(myObj,["Jaipur","302050"])  //isme brackets me likhte hai 
// details.apply(secondObj,["Tonk","304001"])


//Bind => yeh copy create karke deta hai
let myObj = {
    name: "Nilesh",
    class: "9",
    age : "87",
}

let details = function(address,pincode){
    console.log("Name:- "+this.name+" Class:- "+this.class+" Age:- "+this.age+" Address:- "+address+" Pincode:- "+pincode)
}

let secondObj = {
    name: "Vinit",
    class: "8",
    age : "13"
}

let myValue = details.bind(myObj,"Jaipur","302050")
let mysecondValue = details.bind(secondObj,"Tonk","304001")

myValue()
mysecondValue()



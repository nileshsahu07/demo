//Normal copy=>
// const myObj ={
//     Name: "Nilesh",
//     Class: "12",
//     Age : "18",
// }

// let secondObj = myObj

// secondObj.Class = "11"
// console.log(myObj)
// console.log(secondObj)

//Shallow copy=>
// const myObj ={
//     Name: "Nilesh",
//     Class: "12",
//     Age : "18",
// }

// let secondObj = {...myObj}
// // let secondObj = Object.assign({},myObj) 2nd way of shallow copy

// secondObj.Class = "11"
// secondObj.Age = "16"
// console.log(myObj)
// console.log(secondObj)


//deep copy=> //if we will change value of nested obj with shallow copy then it will change in both objects
// const myObj ={
//     Name: "Nilesh",
//     Class: "12",
//     Age : "18",
//     Address:{
//         City:"Jaipur",
//         Pincode:302012
//     }
// }

// let secondObj = {...myObj}

// secondObj.Address.City = "Tonk"
// console.log(myObj)
// console.log(secondObj)


//so that's why we use deep copy
const myObj ={
    Name: "Nilesh",
    Class: "12",
    Age : "18",
    Address:{
        City:"Jaipur",
        Pincode:302012
    }
}

let secondObj = JSON.parse(JSON.stringify(myObj))
secondObj.Address.City = "Tonk"
secondObj.Address.Pincode = 304001

console.log(myObj)
console.log(secondObj)

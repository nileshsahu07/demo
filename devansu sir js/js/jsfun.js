
//synchronous=>
// let a = "devanshu"
// console.log(a)
// console.log("Nilesh")
// console.log("Sahu")


//Asynchronous=>
// console.log("NIlesh")
// console.log("Vinit")
// setTimeout(()=>{
//     console.log("My Name is Khan")
// },2000)
// console.log("Tushar")


//Promises=>
// fetch('http://someexample.com').then().catch().finally()

// how to write promises=>

// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//        resolve()//then() works due to resolve() and catch() works due to reject()

//     },2000)
// })

// myPromise.then(()=>{
//     console.log("response completer")
// })


//2nd way to write promises=>
// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         resolve()
//     },2000)
// }).then(()=>{
//     console.log("response completed")
// })


//how to write user's data=>
// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         resolve({username:"Nilesh",password:"123456",email:"nilesh@gmail.com"})
//     },2000)
// }).then((mydata)=>{
//     console.log(mydata)
// })

//obj me se bhi only username nikalna=>
// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         resolve({username:"Nilesh",password:"123456",email:"nilesh@gmail.com"})
//     },2000)
// }).then((mydata)=>{
//     console.log(mydata)
//     return mydata.username
// }).then((result)=>{
//     console.log(result)
// })


// rejected =>
// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         // rejected("error rejected") 1st way
//         rejected()      //2nd way
//     },2000)
// }).then((mydata)=>{
//     console.log(mydata)
// })/*.catch((error)=>{      1st way
//     console.log(error)
// })*/.catch(()=>{            //2nd way
//     console.log("error rejected")
// })


//if else se =>
// new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         let myError=true;
//         if(myError){
//             resolve({username:"Nilesh",password:"123456",email:"nilesh@gmail.com"})
//         }else{
//             rejected("Error Rejected")
//         }
//     },2000)
// }).then((mydata)=>{
//     console.log(mydata)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("it will always run")
// })


//async await=>
// let myPromise = new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("async task completed")
//         let myError=false;
//         if(myError){
//             resolve({username:"Nilesh",password:"123456",email:"nilesh@gmail.com"})
//         }else{
//             rejected("Error Rejected")
//         }
//     },2000)
// })

// async function mydata(){
// //     let result = await myPromise
// //     console.log(result)
// try {
//     let result = await myPromise
//     console.log(result)
// } catch (error) {
//     console.log(error)
// }
// }
// mydata()


//brings json data=>
// fetch('https://dummyjson.com/products/1').then((result)=>{
//     return result.json()
// }).then((data)=>{
//     console.log(data)
// })


//set in js
// let mySet = new Set(["a","b","c","a","a"])
// mySet.add("Nilesh")
// mySet.add("Nilesh")
// mySet.add("Sahu")
// mySet.delete("Sahu")

// let  value = mySet.has("a")

// console.log(mySet)
// console.log(value)
/* x = 5;
y = 10;
z = x+y
console.log(z) */

 const prompt = require("prompt-sync")()


/*var firstName = "Nilesh"
console.log(firstName) */

//let me reasignment hota hai
/*let firstName = "Nilesh " 
let lastName = "Sahu "
    lastName = "Pancholi "
console.log("firstName "+firstName+"lastName "+lastName)*/

/*const x = 121;
console.log(x)*/

/*{
    var x = 23
}

console.log(x) { } ke bahar ki value var me se print ho jati hai kyuki yeh block scope nhi hota and let and const me nhi hoti kyuki wah block scope hota hai */

/*let name = "Nilesh"
let Name = "Sahu"
console.log(name)
console.log(Name) *//* it means variables are casesensitive becase it consider capital and small variables diffrent.*/

//DATA TYPES=>
/*let firstName = "Nilesh"
console.log(typeof(firstName)) 

let age = 18
console.log(typeof(age))

const twelthPassout = true
console.log(typeof(twelthPassout))

let a;
console.log(a)

//array
const arry =  ["Nilesh", 18, "Vinit", 17]
console.log(arry[0])  //array me se value nikalna 1-1 karke

console.log(typeof(arry))  //array ka typeof cheak karna*/

/*const arry =  ["Nilesh", 18, "Vinit", 17]
 for(i=0; i<arry.length; i++){
    console.log(arry[i])
 } */ //array me se value ek sath puri nikalna


//object
/*const studentName = {
    name : "Nilesh",
    class : 12,
    rollno : 24
}
console.log(studentName)

console.log(typeof(studentName)) // object typeof cheak*/

/*const studentName = {
    name : "Nilesh",
    class : 12,
    rollno : 24
}
console.log("Student Name "+studentName.name+" Class "+studentName.class+" roll-no "+studentName.rollno)*/

//operators=>
/*let x = 7
let y = 7 
let z = x==y
console.log(z)*/

/*let x = 7
let y = "7"
let z = x==y //dobble equel hamesha only equel hai ya nhi yhi  cheak karta hai chahe data type diffrent ho fir bhi.
console.log(z)*/

/*let x = "7"
let y = "7" 
let z = x===y //but three equel data type and value dono cheak karta hai data type and value same hoti hai tabhi true deta hai. 
console.log(z)*/

/*let a = 8
let b = 10
let c = a+b
console.log(c)

let d = 10
let e = 4     //when we don't give value in one variable then output is NaN
let f = d-e 
console.log(f)

let g = 10
let h = 6
let i = g*h
console.log(i)

let j = 100
let k = 2
let l = j/k
console.log(l)

let m = 100
let n = 3
let o = m%n 
console.log(o)

let p = 100
let q = 3
let r = m%n 
console.log(r)

let s = 100
s++
console.log(s)

let t = 100
t--
console.log(t)

let u = 10**2
console.log(u)

let v = 100
    v+=5
console.log(v)

let w = 100
    w-=5
console.log(w)

let x = "Nilesh"
let y = 7
let z = x+7
console.log(z)*/

/*let x = "12"
let y = 7
let z = x+7
console.log(z)*/

//new topic else if=>
/*let number = 2 // for bring else if condition we give 0 and for else -2

if(number>0){
    console.log("The number is positive")
}
else if (number==0){
    console.log("The number is zero")
}
else{
    console.log("The number is negative")
}*/


//1.)Task else if => licence ke liye eligible hai ya nhi
/*let age =  18

if(age<18){
    console.log("you are not eligable for licence")
}
else {
    console.log("you are eligible for licence")
}*/

/*const prompt = require("prompt-sync")()

let Number = prompt("Enter Number")

if(Number>0){
    console.log("The number is positive")
}
else if (Number==0){
    console.log("The number is zero")
}
else{
    console.log("The number is negative")
}*/

//2.) Task else if => user even or odd
/*const prompt = require("prompt-sync")()
let num = prompt("Enter Number:-")

if(num%2==0){
    console.log("Number is even")
}
else{
    console.log("Number is odd")
}*/

//3.) Task else if => player 1 or player 2 ki vlaue same hai kya
/*const prompt = require("prompt-sync")()
let Player1 = prompt.hide("Enter Number:-")//.hide se yha hum jo bhi value likhenge wah show nhi hogi but work karegi
let Player2 = prompt("Enter Number:-")


if(Player1 == Player2){
    console.log("Yaahoo you won..!")
}
else{
    console.log("Better luck next time")
}

console.log(`Player1 Number ${Player1} Player2 Number ${Player2}`)*/


//3.) Task create calculator=>
/*const prompt = require("prompt-sync")()

let operator = prompt("Enter operator (+,-,*,/)")
let number1 = parseInt(prompt("Enter number1:- ")) // parse int isliye lagaya hai kyuki value string me aayegi user dega jo isliye use intiger means number me badlne ke liye 
let number2 = parseInt(prompt("Enter number2:- "))

let result;

if(operator=="+"){
    result=number1+number2
}
else if(operator=="-"){
    result=number1-number2
}
else if(operator=="*"){
    result=number1*number2
}
else if(operator=="/"){
    result=number1/number2
}
else{
    console.log("invalid Input ")
}

//console.log("Result:- " +number1+operator+number2+" = "+result) mostly we use niche wala $ye
console.log(` ${number1} ${operator} ${number2} = ${result}`) */


/* let firstName = Number("Nilesh") //string to number
 console.log(typeof(firstName))

 let num = String(98)              //number to string
 console.log(typeof(num))*/ 


//4.) Task else if=> which number is the largest
/*const prompt = require("prompt-sync")()
let num1 = prompt("Enter Number1:- ")
let num2 = prompt("Enter Number2:- ")

if(num1>num2){
    console.log("Num 1 is the largest")
}
else if(num1<num2){
    console.log("Num 2 is the largest")
}
else{
    console.log("Both are equal")
}*/


//5.) Task else if => student grades
/*const prompt = require("prompt-sync")()
let studentName = prompt("Enter Student Name:- ")
let marks = prompt("Enter Marks:- ")

if(marks>=90 && marks<=100){
    console.log("Student Name "+studentName+" Grade A+")
}
else if(marks>=80 && marks<=90){
    console.log("Student Name "+studentName+" Grade A")
}
else if(marks>=70 && marks<=80){
    console.log("Student Name "+studentName+" Grade B+")
}
else if (marks>=60 && marks<=70){
    console.log("Student Name "+studentName+" Grade B")
}
else if(marks>=45 && marks<=60){
    console.log("Student Name "+studentName+" Grade C")
}
else if(marks>=35 && marks<=45){
    console.log("Student Name "+studentName+" Grade D")
}
else{
    console.log("Student Name "+studentName+" Fail")
}*/

//Java Script string mathods=>

/*let firstName = (" Nilesh ") //it counts space also 
let lastName = (" Sahu")

let text = firstName.length 
let text2 = lastName.length

console.log(text)
console.log(text2)*/

/*let text = "kal ho na ho"

let text1 = text.slice(4 , 8)
console.log(text1)*/

/*let text = "   Animal Trailer Out Now   "

let textTrim = text.trim()
let textStart = text.trimStart()
console.log(text)
console.log(textTrim)
console.log(textStart)

console.log(text.length)//total length 28
console.log(textTrim.length)//after both sides trim text length 22
console.log(textStart.length)//after one side trim text length 25 
*/

/*let text =  "my name is Nilesh Pancholi"

let textReplace = text.replace("Pancholi","Sahu")
console.log(text)
console.log(textReplace)  //it does not change original content it changes only replace content
*/


/*let text =  "my name is Nilesh Pancholi Pancholi Pancholi Pancholi"

let textReplace = text.replaceAll("Pancholi","Sahu")
console.log(text)
console.log(textReplace) */  

/*let text1 = "Nilesh"
let text2 = "Sahu"

let text3 = text1.concat(text2)

console.log(text1)
console.log(text2)
console.log(text3)*/

/*let text1 = "Nilesh"
let text2 = "SAHU"

let text3 = text1.toUpperCase()
let text4 = text2.toLowerCase()

console.log(text3)
console.log(text4)*/

/*let text1 = "I am a Full Stack Web Developer"

let text2 = text1.split() //it coverts string to array

console.log(text2)

console.log(typeof(text1)) //data type cheak
console.log(typeof(text2)) // split makes it array so it give output object. object is data type of array.
*/

//we make little chages in it for practice its not a diffrent .
/*let text1 = "I am a Full Stack Web Developer"

let text2 = text1.split(" ") //if we give space in it then it divide it in diffrent parts

console.log(text2)
console.log(text2[5])//if we wants to take a value into a array then we give number .

console.log(typeof(text1)) //data type cheak
console.log(typeof(text2))*/

/*let text = "Kal ho na ho"

let newtext = text.includes("K") //when we give in it lower k then it shows false that's why we take care of lower case and capital case
console.log(newtext)*/

/*let text = "Kal ho na ho"

let text2 = text.charAt(1) //1st nnumber indexing per konsa charactor hai 
console.log(text2)*/


// array deeply study=>
/*let array = [ "nilesh",7,"tushar",17,"vinit",10,"koshal",27]

 array[3] = 16 //array me changes karna 
console.log(array)*/

/*//new way to write array
const hello = new Array("nilesh",83,"vinit",92,"tushar",32)
console.log(hello)
console.log(typeof(hello))*/

//array methods=> 

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let arraylenth = myArray.length
console.log(arraylenth) //its output is 7 because it counts how many element are there . from indexing it is 6.
*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.toString()
console.log(text)*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.pop()
console.log(text) //if we console text then  it shows what we removed but if we console myArray then it shows all values besides of last value
*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.push(17) //last me value add karna
console.log(myArray) */

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.shift()
console.log(text) //if we console text then  it shows what we removed but if we console myArray then it shows all values besides of first value.
*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.unshift("kumar") //add a value starting in a array
console.log(myArray)*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray.join("+") //hum yha additional operator(+) ki jagah blank space de tab bhi yah work karega
console.log(text)
console.log(typeof(text  ))*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

let text = myArray[1] = "friend"
console.log(myArray)*/

/*let myArray = ["nilesh",83,"vinit",84,"tushar",85,"koshal"]

    delete myArray[2]
console.log(myArray[2])*/

/*const firstArray = ["Nilesh","vinit","sajan", "saven"]

const secondArray = [18,37,39,20]

let newArray = firstArray.concat(secondArray)

console.log(newArray)

console.log(newArray[5]) */

/*const firstArray = ["Nilesh","vinit","sajan", "saven"]

let newArray = firstArray.splice(1,2)
console.log(firstArray)
console.log(newArray)*/

/*const firstArray = ["nilesh","vinit","sajan", "saven","koshal","rohit","gourav"]

let newArray = firstArray.slice(1)

console.log(newArray)*/

/*const firstArray = ["nilesh","vinit","sajan", "saven","koshal","aman","rohit","gourav","z"]

    firstArray.sort()

console.log(firstArray)*/



//array iteration
//1.) for loop

/*for(x=1; x<=5; x++){
    console.log(x)
}*/

//for loop se array me se value nikalna

/*let myArray = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

for(let x=0; x<myArray.length; x++){
    console.log(myArray[x])
}*/

/*let myArray = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

 for(let x=1; x<myArray.length; x++){
    console.log(myArray[x]+" X value "+x)
}*/



//function=>

/*function fname(){
    x = 3
    y = 5
    z = x+y
    console.log(z)
}
fname() */

//Parameters in function

/*function fname(a,b){
    let c = a*b
    console.log(c)
}
    fname(2,3)*/

/*function fname(a,b){
    return a*b
}
    console.log(fname(5,6))*/

//Aro function

/*let fname = (a,b)=>{
    let c=a+b
    console.log(c)
}
    fname(5,5)*/

/*let fname = (a,b)=>{
   return a+b
}
    console.log(fname(8,2))*/

//2.)forEach se array me se value nikalna

/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

arraay.forEach((value)=>{
    console.log(value)
})*/

/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

arraay.forEach((value,index)=>{
    console.log("value- "+value+" Index "+index)
})*/



//map se value aro dvara nikalna

/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

arraay.map((value)=>{
    console.log(value)
})*/

//map se value function dvara nikalna

/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

let extractvalue = function fname(value){
    return value
}

let result = arraay.map(extractvalue)
    console.log(result)*/

//diffrence beetwen map and forEach

/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

let newarray = arraay.forEach((value)=>{
    console.log(value)
})

    console.log(arraay)
    console.log(newarray)*/


/*let arraay = ["nilesh",82,"vinit",83,"tushar",93,"koshal",92]

    let newarray = arraay.map((value)=>{
        return value
    })
    
        console.log(arraay)
        console.log(newarray)*/

//function keyword and map se array ki value ko dubble karna 
/*const arraay = [5,8,3,9,4,7,2]

let dubble= function fname(value){
    return value*2
}
let result = arraay.map(dubble)  //forEach me value return karke nhi deta or wo new array create nhi karta isliye ye foreach se nhi hoga 
    console.log(result)*/

 //aro and map se array ki value ko dubble karna 
 /*const arraay = [5,8,3,9,4,7,2]

 let result = arraay.map((value)=>{
    return value*2
 })
    console.log(result)*/  


//6.) Task else if=> if user give value less than 10 then hyy should be print as much as user give value and less then 20 then prints byy as much as user give value.

/*const prompt = require("prompt-sync")()

let userInput = prompt("Enter Value:- ")

if(userInput<=10){
    for(let x=1; x<=userInput; x++)
        console.log("hyy "+"number "+x)
        
}
else if(userInput<=20){
    for(let x=1; x<=userInput; x++)
        console.log("byy "+"number "+x)
}*/

//4.)filter iterate=>

/*const secondryarray =[1,4,7,9,5,3,2,5,7,7,2,3,4,34,32,4,5,] 

let result = secondryarray.filter((value)=>{
   return value>=5
})
    console.log(result)*/

//7.)Task => print even values by aro function from a array 

/*const secondryarray = [1,4,7,9,5,3,2,5,7,7,2,3,4,34,32,4,5,100]

let result= secondryarray.filter((value)=>{
    return value%2==0
})
    console.log(result)*/

//Task => print even values by function keyword from a array 
/*const secondryarray = [1,4,7,9,5,3,2,5,7,7,2,3,4,34,32,4,5,100,33,143]

function fname(value){
    return value%2==0
}
let result = secondryarray.filter(fname)
    console.log(result)*/

//5.) reduse=> ye total,value,index, print karta hai

/*const myNum  = [1,4,7,9,5,3,2,5,7,7,2,3,4,34,32,4,5,100]

let result = myNum.reduce((total,value)=>{
    return total+value
})
    console.log(result)*/



//8.)Task else if=> if user give input dev then print devanshu
                            // devanshu  dev
                            // swastik   satvik 
                            // satvik    swastik
                            // aman      naman 
                            // naman     aman


/*const prompt = require("prompt-sync")()

let userInput = prompt("Enter Name:- ")

if(userInput=="devanshu"){
    console.log("dev")
}
else if(userInput=="dev"){
    console.log("devanshu")
}
else if(userInput=="swastik"){
    console.log("satvik")
}
else if(userInput=="satvik"){
    console.log("swastik")
}
else if(userInput=="aman"){
    console.log("naman")
}
else if(userInput=="naman"){
    console.log("aman")
}
else{
    console.log("Invalid Name")
}*/

//Task=> following array convert to upercase

/*const myArray = ["devanshu","swastik","daisy","deep","aman"]

let result = myArray.map((value)=>{
    return value.toUpperCase()

})
    console.log(myArray)
    console.log(result)*/



//Numbers in JS
//1.) isNan
/*let num = 83
let y = "93"

console.log(typeof(num))
console.log(typeof(y))

/*let num = "9"+"9"

console.log(num)*/ 

// let num = /*"9"*"9"*/ /*"9"/"9"*/ "9"-"9" 

// console.log(num)


//2.) parseFloat=>

//first way to use parseFloat
/*let x = "11.87 "
console.log(parseFloat(x))

//second way to use parseFloat
let y = parseFloat("11.87")
console.log(y)
console.log(typeof(y))*/

//3.) parseInt=>

/*//first way
let x = "456"
console.log(parseInt(x))

//second way
let y = parseInt("456")
console.log(y)*/


//parseInt use in calculator for plus values
// const prompt = require("prompt-sync")()

/*let operator = prompt("Enter operator (+,-,*,/)")
let number1 = parseFloat(prompt("Enter number1:- ")) //humne yha float kyo diya notebook me likha hai
let number2 = parseFloat(prompt("Enter number2:- "))

let result;

if(operator=="+"){
    result=number1+number2
}
else if(operator=="-"){
    result=number1-number2
}
else if(operator=="*"){
    result=number1*number2
}
else if(operator=="/"){
    result=number1/number2
}
else{
    console.log("invalid Input ")
}

//console.log("Result:- " +number1+operator+number2+" = "+result) mostly we use niche wala $ye
console.log(` ${number1} ${operator} ${number2} = ${result}`) */


//objects in JS

//1.) accesing values
/*const myObj = {
    name : "Nilesh",
    class:  6,
    age: 18,
    contact: 9461196414,
    rollno : 21,
    studentDetails: function add(){
        return this.name+" "+this.class+" "+this.age+" "+this.contact+" "+this.rollno
    }
}
    console.log(myObj)
    console.log(myObj.studentDetails())*/

//2.) Nested objects=>

/*const student = {
    name: "nilesh",
    contact:{
        email: "nilesh@gmail.com",
        mnum: 37984759877
    },
    id:83342,
    address:{
        city:"Tonk",
        pincode:304001
    },
}

    console.log(student.contact.email)
    console.log(student.address.pincode)*/

//nested array=>

/*const arry = [
    ["Nilesh",96],
    ["Nitin",65],
    ["Manoj",76],
]
    for (let x = 0; x<arry.length; x++){
        for(let y = 0; y<arry[x].length; y++){
            console.log(arry[x][y])
        }     
    }*/


//8.)Task =>object me se sari values ek sath nikalna //for in se
   /* const myObj = {
        name : "Nilesh",
        class:  6,
        age: 18,
        contact: 9461196414,
        rollno : 21,
        
    };
    for (const key in myObj){
        console.log(key, myObj[key]);
    }*/


    //Ternary Operator=>
    
    // let age = 18;
    
    /*let age = prompt("Enter age:- ")

    age>=18 ? console.log("valid age to apply license")
    : console.log("unvalid age to apply license")*/

    //switch statement =>

    /*let firstName = "Nilesh"
    // let job = "teacher"
    let job = prompt("Enter Job:- ")
    
    switch(job){
        case "teacher":
            console.log(firstName+ " teach how to code")
            break
        
        case "developer":
            console.log(firstName+" create a webpage")
            break

        case "driver":
            console.log(firstName+ " drive a car like ola")
            break

        default:
            console.log("invalid input")
    }*/


//patern print=>

//yah html starprint.html file me hai 

// isme bhi left triangle

/*let starPrint = 5;
let starString = ""

for (i=1; i<=starPrint; i++){
    for(j=1; j<=i; j++){
    starString = starString+"*"
}
    starString = starString+"\n"
}
    console.log(starString)*/


// right triangle
    /*let starPrint = 5;
    let starString = ""
    
    for (i=1; i<=starPrint; i++){
        for(k=1; k<=starPrint-i; k++){
        starString = starString+" "
        }
        for(j=1; j<=i; j++){
        starString = starString+"*"
        }
        starString = starString+"\n"
    }
        console.log(starString)*/


// middle triangle
/*let starPrint = 5;
let starString = ""

for (i=1; i<=starPrint; i++){
    for(k=1; k<=starPrint-i; k++){
    starString = starString+" "
    }
    for(j=1; j<=i; j++){
    starString = starString+"*"
    }
    for(l=2; l<=i; l++){
    starString = starString+"*"
    }
    starString = starString+"\n"
}
    console.log(starString)*/


//9.)Task => if else nested task


/*let height = prompt("Enter your Height:- ")

if(height<=1){
    console.log("Short")
    let short = prompt("can you squeak yes or no:- ")
    if(short=="no"){
        console.log("Might be a squirrel")
    }
    else{
        console.log("Might be a rat")
    }
}
else if(height>=1){
    console.log("Tall")
    let neck = prompt("your neck short or long:- ")
    if(neck=="short"){
        let nose = prompt("your nose short or long:- ")
        if(nose=="short"){
            let live = prompt("where do they live on land or in water:- ")
            if(live=="on land"){
                console.log("might be a rhinoceros")
            }
            else{
                console.log("might be a hippo")
            }
        }
        else{
            console.log("might be an elephant")
        }
    }
    else{
        console.log("might be a giraffe")
    }
}*/


// JS Date=>

/*let currentDate = new Date()
 console.log(currentDate)*/ 

/* let currentDate = new Date()

 let todayDate = currentDate.getDate()
 console.log(todayDate)

 let month = currentDate.getMonth()
 console.log(month+1)

 let year = currentDate.getFullYear()
 console.log(year)

 let hours = currentDate.getHours()
 console.log(hours)

 let minutes = currentDate.getMinutes()
 console.log(minutes)

 let second = currentDate.getSeconds()
 console.log(second)

 console.log(`${todayDate}/${month}/${year} ${hours}:${minutes}:${second}`)*/

 //JS boolean=>

 /*let x = 9
 let y = 9

 console.log(x==y)*/

 //JS loop=>
 
 //for loop
 /*for(let i=1; i<=10; i++){
    console.log(i)
 }*/

 //while loop
 /*let i = 1
 while(i<=10){
    console.log(i)
    i++
 } */

 /*const array = ["devanshu", 93]

 for (let x in array){
    console.log(array[x])
 }*/

 /*let  name = "Nilesh"

 for(let keys in name){
    console.log(name[keys])
 }*/

 //4.) break and continue=>
 /*for(i=1; i<=10; i++){
    if(i==3){
        break
    }
    console.log(i)
 }*/

/* for(i=1; i<=10; i++){
    if(i==3){
        continue
    }
    console.log(i)
}*/

 //iske aage ka topic events hai jo event html ma hai 

//10.)while task=> 2 ki table

/*let i=2

while(i<=20){
    if(i%2==0){
        console.log(i)
    }
    i++
}*/

//11.) task 1 se 100 tak jo bi numbers 11 se divide ho vah print karna hai =>

/*let i=1

while(i<=100){
    if(i%11==0){
        console.log(i)
    }
    i++
}*/

// 12.)task user jitne ki table lena chahe utne ki=>

/*let num = prompt("enter number:- ")
let i  =1
while(i<=10){
        console.log(i*num)
    i++
}*/

//13.)task bill print =>

//sir's way
/*let item = prompt("Enter item :- ")
let price = prompt("Enter Price :- ")
let quantity = prompt("Enter item Quantity :- ")

let discount = 10
let gst = 20
let bill = price*quantity
let bill_Discount = bill*(discount/100)
let total_Bill = bill-bill_Discount
let bill_Gst = total_Bill*(gst/100)
let final_Bill = total_Bill+bill_Gst



console.log("Item:- "+item)
console.log("Price:- "+ price)
console.log("Quantity:- "+ quantity)
console.log("Bill :- "+bill)
console.log("Bill Discount :- "+bill_Discount)
console.log("Total Bill:- "+total_Bill)
console.log("Gst:- "+bill_Gst)
console.log("Final Bill:- "+final_Bill)
console.log("You have to pay "+final_Bill+"\u20B9"+" for "+quantity+"-"+item)*/


//my way
/*let item = prompt("enter item:- ")
let price = prompt("enter price:- ")
let quantity = prompt("enter quantity:- ")
console.log("Your order:- "+item)
console.log("Price:- "+price)
console.log("Quantity:- "+quantity)

let bill = price*quantity
console.log("original price:- "+bill)
let discount = bill*10/100
console.log("10% discount:- "+discount)
let totalBill = bill-discount
console.log("total bill:- "+totalBill)

let gst = totalBill*20/100
console.log("20% Gst:- "+gst)

let finalBill = totalBill+gst
console.log("you have to pay "+finalBill+" \u20B9 "+" for "+quantity+"-"+item)*/


//14.)task loan pridiction=>

/*let job_type = prompt("enter your job_type Government/Business/Private :- ")

if(job_type=="government"){
    let salary = prompt("your salary:- ")
    if(salary>50000){
        console.log("you can apply for loan")
    }
    else{
        console.log("you can not apply for loan")
    }
}
else if(job_type=="business"){
    let turnOver = prompt("your early turnover is:- ")
    if(turnOver>2000000){
        console.log("you can apply for loan")
    }
    else{
        console.log("you can not apply for loan")
    }
}
else if(job_type=="private"){
    console.log("no loan available for you")
}*/



//Java Script scopes=>

//block scope=>
/*if(true){
    let x = 2
    const y = 3
}
 console.log(x)
 console.loog(y)*/

/*if (true){
    let x = 5
    const y = 9 
    console.log(x)
    console.log(y)
}*/

//global scope=>
 /*if(true){
    var x = 2
 }
  console.log(x)*/

/*var x= 4
if(true){
    var x= 5
}
    console.log(x)*/

//function scope or local scope=>

/*function myfn(a,b){
    return a+b
}
    console.log(myfn(6,6))*/

/*function myfn(a,b){
    console.log(a+b)
}
myfn(7,7)*/


/*let x = 4 //for understanding
var y = 7
if(true){
    let x = 6
    var y = 9
}
    console.log(x)
    console.log(y)*/


//iske aage dom.html and dom2 me



//Task patern print=>
/*let starPrint=5
let starString=""
for(i=1; i<=starPrint; i++){
    for(j=1; j<=starPrint; j++){
        starString = starString+"*"
    }
    starString = starString+"\n"
    
}
console.log(starString)*/


//setTimeout=>
/*function myfn(){
    let x = 7
    console.log(x)
}

setTimeout(myfn,2000)*/

// setInterval=>
/*function myfn(){
    let x = 7
    console.log(x)
}
setInterval(myfn,2000)*/

//iska clock me use date.html me














 











 







     


















 

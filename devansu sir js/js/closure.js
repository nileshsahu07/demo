// lexical scope=>
// function firstFun(){
//     let x = 10
//     let y = 73
//     function secondFun(){
//         console.log(x)
//     }

//     function thirdFun(){
//         console.log(y)
//     }

//     secondFun()
//     thirdFun()
// }
// firstFun()

/*console.log(x) ye direct ese bahar console nhi honge x is not difined error batayega isliye hun function ke andar function banake ise dete hai
 console.log(y)*/


//  function outer(){
//     let a = 19
//     let b = 18
//     function init(){
//         console.log(a)
//         console.log(b)
//     }
//     init()
//  }
//  outer()


// function outer(){

//     function init(a,b){
//         console.log(a+b)
//         console.log(a-b)
//     }
//     init(12,10)
//  }
//  outer()


// clouser=>
// function firstFun(){
//     let a = 12;
//     function secondFun(){
//         console.log(a)
//     }
//     return secondFun
// }
// let b = firstFun()
// b()


function myfn(){
    let a = 38
    let b = 28
    let c = a+b
    function init(){
        console.log(c)
    }
    return init
}

let x = myfn()
x()
function firstFun(){
    console.log("calback function")
}

function secondfun(){
    console.log("second")
}



function hello(a,b,callback){
     let c = a*b
     console.log(c)
     callback()
}
hello(6,4,firstFun)
hello(6,4,secondfun)
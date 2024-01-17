((a,b)=>{
    console.log(a*b)
    console.log("Hello")
})(6,7);//hamesha 2 iife ke bich me semicolon lagana jaruri hota hai 

(function myfn(c,d){
    console.log(c+d)
    console.log("by")
})(5,5)
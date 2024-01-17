function uniqueid(length){
    let charactar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopristuvwxyz1234567890"

    randomId= ""

    for(let i=0; i<length; i++){
    let myId = Math.floor(Math.random()*charactar.length)
    randomId += charactar.charAt(myId)
    }

    return randomId
}

let id = uniqueid(10)
console.log(id)
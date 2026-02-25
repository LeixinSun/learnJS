//HERE we go get Promise!
//basic promise
console.log("start")
const p = new Promise((resolve, reject)=>{
    setTimeout((()=>{
        determine = 0
        if(determine){
            resolve("I got data")
        }else{
            reject("server failed")
        }
        
    }),2000)
})
p.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(`failed: ${err}`)
})
console.log("end")


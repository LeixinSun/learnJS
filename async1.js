// console.log("start")
// setTimeout((()=>{
//     console.log("after 2s")
// }), 2000)
// console.log("finish")
//finish just appear before "after 2s";js just go ahead!
//raw async

console.log("start cooking")
function cook(finish){
    setTimeout(()=>{
        console.log("cooking!")
        finish("Beijing Duck!")
    },4000)
}
cook((food)=>{
    console.log(`I got ${food}!`)
})
//embed what you wanna do as a funct to parse into the "need wait" function
//but if there are so many funct need to wait and parse, the parameters as function will be overlapped



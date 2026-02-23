function greet(name = "youknowwho"){
    console.log(`halo,${name}`)
}

let name = "syl"
greet()
greet(name)

const sayhi = () => {console.log("hi")}
const double = (fn) =>{
    fn()
    fn()
}
// function double(fn){
//     fn()
//     fn()
// }
double(sayhi)

const isAdult = age => age >= 18
const getGrade = (score) => {
  if (score >= 90) return "A"
  if (score >= 80) return "B"
  if (score >= 60) return "C"
  return "D"
}
console.log(isAdult(20))    
console.log(getGrade(85))   
let person = {
    name: "syl",
    age: 19,
    isStudent: true,
    greet(){
        console.log("halo")
    }
}
console.log(person);console.log(person.name)
let key = "age";console.log(person[key])
delete person.isStudent;console.log(person)
person.greet()

//iteration
for(let key in person){
    console.log(`${key}:${person[key]}`)
}

let obj = {a:1,b:2,c:3}
console.log(Object.keys(obj)); console.log(Object.values(obj)); console.log(Object.entries(obj))
let scores = {"chinese":100, "math":97, "eng":99}
let parser = Object.entries(scores).filter(([_, score])=>score===100)
console.log(parser)

//fastly get value
let {name, age} = person
console.log(name); console.log(age)

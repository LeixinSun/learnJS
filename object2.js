//unfold operator
let obj1 = {a:1, b:2}
let obj2 = {...obj1, c:2}
console.log(obj2)

let arr1 = [1,2]
let arr2 = [...arr1,3]
console.log(arr2)

//the latter one will be priorited
let defaults = {color:"red", size: 7}
let custom = {size: 10}
let usr = {...defaults, ...custom}
console.log(usr)

//obj in arr
let students = [
  { name: "sam", score: 92 },
  { name: "john", score: 55 },
  { name: "mike", score: 78 }
]

let passed = students
  .filter(s => s.score >= 60)
  .map(s => s.name)
console.log(passed)  


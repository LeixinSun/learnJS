let scores = [12,13,14]
for(let score of scores){
    if(score === 13){
        scores.pop()
    }
    console.log(score)
}

//3 core methods of arrary
let names = ["a","s","d","f","g"]
//go through the arrary
names.forEach(item => console.log(item))
let nums = [1,2,3,4]
//map the value to return-value
let double = nums.map(num => num<<1)
console.log(`the raw arrary:${nums}`)
console.log(`double the arr use map:${double}`)
//filter
let filtered = nums.filter(num => num!=1&&num!=2)
console.log(`filtered arrary:${filtered}`)

//and we have a chain of methods
let chain = nums
    .filter(num => num!=1)
    .map(num => num<<1)

console.log(`chain methods implemented:${chain}`)


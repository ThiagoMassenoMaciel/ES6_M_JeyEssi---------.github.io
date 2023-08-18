const NameOfAfunctionARROW = text =>`hellow ${text}`;
const named1 = 300;
const named2 = 301;

console.log(` into the script14.js--------------`)
console.log(`named1 =  ${named1}`)
console.log(`named2 = ${named2}`)

console.log(`reference function no args = ${NameOfAfunctionARROW}`)
console.log(`calling a function no args = ${NameOfAfunctionARROW()}`)
console.log(`calling a function (Joana ) = ${NameOfAfunctionARROW("Joana")}`)


export default NameOfAfunctionARROW

export { named1 , named2 }
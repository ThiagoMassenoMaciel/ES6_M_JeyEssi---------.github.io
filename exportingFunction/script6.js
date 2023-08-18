alert("Now you must to display two numbers for know who is the biggest")
const numberOne = Number(prompt("digit number one:."));

const numberTwo =  Number(prompt("digit number Two:."));
console.log("Execute from script6.js sum-("+ numberOne+ numberTwo+")")

export default (numberOne, numberTwo)=>{ 
     
    if(numberOne>numberTwo){
        return'Number one is the biggest'
    }
    return 'Number Two is the biggest'


}

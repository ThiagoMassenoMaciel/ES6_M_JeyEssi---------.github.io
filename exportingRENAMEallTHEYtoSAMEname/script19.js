//Its like when we organized a lots of variables DOM becomming to a property from a new object together functions 
import * as Calculates_div_sub_mult_exp_sum from "./script20.js";
console.log("Its like object \nCalculates_div_sub_mult_exp_sum\n       properties : value function\ndiv()\nsub()\ndivision()")

console.log( "sum:" + Calculates_div_sub_mult_exp_sum.sum
+ '\n' + `sum(12,1) ` +
'\n' + Calculates_div_sub_mult_exp_sum.sum(12,1))

console.log(`--div----`)
console.log(Calculates_div_sub_mult_exp_sum.division(12,1))

console.log(`---sub---`)
console.log(Calculates_div_sub_mult_exp_sum.Sub(12,1))

console.log(`---exp---`)
console.log(Calculates_div_sub_mult_exp_sum.exponential(12,1))

console.log(`---multi---`)
console.log(Calculates_div_sub_mult_exp_sum.mult(12,1))




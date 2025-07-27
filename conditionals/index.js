let age = 17;
let grace = 2;
age += grace;
console.log(age);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age ** grace);
console.log(age % grace);
if ( age + grace > 18 ) {
    console.log("You can drive. ");
} else {
    console.log("You can not drive. ")
}
a = 6
b = 8
let c = a>b ? (a - b) : (b- a);
/* 
translate to :
if (a>b) {
    let c = a-b;
} else {
 let c =  b-a; 
}
*/
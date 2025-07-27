let input = prompt("Enter a number : ");
let n = Number(input);
if(n % 2 == 0) {
    console.log("Divisible by 2.")
}else if ( n% 3 == 0) {
    console.log("Divisible by 3.")
} else {
    console.log("None of them.")
}
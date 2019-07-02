
// //multiply first argument to the exponent of 2nd arg
// const power = function(base,exp) {
//     //result is defaulted to 1
//     let result = 1;
//     //iterate count as long as it's less than our exponent
//     //counts up to our exponent argument
//     for (let count = 0; count < exp; count++) {
//         //result is equal to result * base
//         result *= base;
//     }
//     return result;
// };

// console.log(power(2,4));





var arr = ['bob','oob','frank','jimmy'];


function random() {
    var rand = arr[Math.floor(Math.random() * arr.length)];
    console.log(rand);
}

random();

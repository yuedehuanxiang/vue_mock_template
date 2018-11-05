// async function testAsync() {
//   await new Promise((resolve, reject)=>{
//     setTimeout(function () {
//       console.log(1);
//       resolve(1)
//     },2000)
//   })
// }
//
// testAsync();
// console.log(2);

function factorial(n) { return (n > 1) ? n * factorial(n - 1) : n
}

console.log(factorial(3));

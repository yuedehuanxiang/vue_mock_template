// var url = require('url');
//
// var s = url.parse('http://www.baidu.com?name=cs&age=24',true);
//
// console.log(s);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log( i);
//   }, 3000);
// }
// console.log( i);

var output = function (i) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
};
for (var i = 0; i < 5; i++) {
  output(i);  // 这里传过去的 i 值被复制了
}
console.log(i);

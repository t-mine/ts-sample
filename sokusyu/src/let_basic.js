// 型宣言
var str = 'foo';
str = 'bar'; // 数値は代入できない
// 型推論
var hoge = 100;
hoge = 200; // 文字列は代入できない。
// any型で型宣言
var data = 100;
data = 'hello';
// any型になってしまう書き方
var data2;
data2 = 100;
data2 = 'hello';
var data3 = null;
data3 = 100;
data3 = 'hello';
var data4 = undefined;
data4 = 100;
data4 = 'hello';
// 値によるany型の型推論
var data5;
data5 = 'hoge';
console.log(data5.charAt(0));
// console.log(data5.toFixed(0)); // 実行時にエラーになる
data5 = 100; // any型なので数値を代入できる
console.log(data5.toFixed(0));
// 数値リテラル 16進数
var num1 = 0xFF;
console.log(num1);
// 数値リテラル 2進数
var num2 = 3;
console.log(num2);

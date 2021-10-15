// 型宣言
let str: string = 'foo';
str = 'bar'; // 数値は代入できない

// 型推論
let hoge = 100;
hoge = 200; // 文字列は代入できない。

// any型で型宣言
let data: any = 100;
data = 'hello';

// any型になってしまう書き方
let data2;
data2 = 100;
data2 = 'hello';

let data3 = null;
data3 = 100;
data3 = 'hello';

let data4 = undefined;
data4 = 100;
data4 = 'hello';

// 値によるany型の型推論
let data5;
data5 = 'hoge';
console.log(data5.charAt(0));
// console.log(data5.toFixed(0)); // 実行時にエラーになる
data5 = 100; // any型なので数値を代入できる
console.log(data5.toFixed(0));

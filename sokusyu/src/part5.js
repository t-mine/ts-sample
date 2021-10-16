// 共有型
var data;
data = "hoge";
data = 100;
// data = true; // コンパイルエラー
// 共有型の配列
var array = ["a", 1, 2];
// 戻り値の型としての共有型
function square(value) {
    if (value < 0) {
        return false;
    }
    else {
        return Math.sqrt(value);
    }
}
console.log(square(9));
console.log(square(-9));
console.log(square(9.9));

// 配列
var array = ['Java', 'Go'];
console.log(array[0]);
// 読み取り専用の配列
var data = ['Java', 'Go'];
// data[1] = 'Python'; // コンパイルエラー
// オブジェクト
var obj = {
    'hoge': 'ほげ',
    'foo': 100
};
// obj.piyo = 'ぴよ'; // コンパイルエラー
// 列挙型
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var m = Sex.MALE;
console.log(m); // 結果：0
console.log(Sex[m]); // 結果：MALE

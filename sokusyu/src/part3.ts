// 配列
let array: string[] = ['Java', 'Go'];
console.log(array[0]);

// 読み取り専用の配列
let data: readonly string[] = ['Java', 'Go'];
// data[1] = 'Python'; // コンパイルエラー

// オブジェクト
let obj = {
    'hoge': 'ほげ',
    'foo': 100
}
// obj.piyo = 'ぴよ'; // コンパイルエラー

// 列挙型
enum Sex {
    MALE,
    FEMALE,
    UNKNOWN
}

let m: Sex = Sex.MALE;
console.log(m); // 結果：0
console.log(Sex[m]); // 結果：MALE
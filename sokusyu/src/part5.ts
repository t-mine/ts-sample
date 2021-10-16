// 共有型
let data: string | number;
data = "hoge";
data = 100;
// data = true; // コンパイルエラー

// 共有型の配列
let array: (string | number)[] = ["a", 1, 2];

// 戻り値の型としての共有型
function square(value: number): number | boolean {
  if (value < 0) {
    return false;
  } else {
    return Math.sqrt(value);
  }
}

console.log(square(9));
console.log(square(-9));
console.log(square(9.9));

// プリミティブ型の判定 typeof
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(1);
  }
}

// クラス型の判定 instanceof

// objがnameプロパティを持つか
//if('name' in obj ) {}

// unknown型(型安全なany型)
let str: unknown = "hoge";
//str.trim(); コンパイルエラー
if (typeof str === "string") {
  str.trim();
}

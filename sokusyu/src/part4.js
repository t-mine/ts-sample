// function命令
function triangle(base, height) {
    return base * height / 2;
}
console.log(triangle(10, 5));
// console.log(triangle(10)); // コンパイルエラー
// 関数リテラル
var triangle2 = function (base, height) {
    return base * height / 2;
};
// アロー関数
var triangle3 = function (base, height) {
    return base * height / 2;
};
// 任意の引数
var greeting = function (foo, bar) {
    if (bar) {
        return foo + "\u3001" + bar;
    }
    return "" + foo;
};
console.log('1:' + greeting('おはよう'));
console.log('2:' + greeting('おはよう', undefined));
console.log('3:' + greeting('おはよう', null));
console.log('4:' + greeting('おはよう', 'エミリー'));
// 引数に既定値を設定
var greeting2 = function (foo, bar) {
    if (bar === void 0) { bar = "エビリワン"; }
    if (bar) {
        return foo + "\u3001" + bar;
    }
    return "" + foo;
};
console.log('1:' + greeting2('おはよう'));
console.log('2:' + greeting2('おはよう', undefined));
console.log('3:' + greeting2('おはよう', null));
console.log('4:' + greeting2('おはよう', 'エミリー'));
// 可変長引数
function sum() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var result = 0;
    // 配列の内容を順に足しこむ
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        result += value;
    }
    return result;
}
console.log(sum(1, 2, 4, 5, 6));
function show(value) {
    if (typeof value === 'number') {
        console.log(value.toFixed(0));
    }
    else {
        console.log(value ? '真' : '偽');
    }
}
show(10.345);
show(false);
// show('hoge'); // コンパイルエラー！

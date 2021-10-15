// function命令
function triangle(base: number, height: number): number {
    return base * height / 2;
}
console.log(triangle(10,5));
// console.log(triangle(10)); // コンパイルエラー

// 関数リテラル
let triangle2 = function(base: number, height: number): number {
    return base * height / 2;
}

// アロー関数
let triangle3 = (base: number, height: number): number => {
    return base * height / 2;
}

// 任意の引数
let greeting = (foo: string, bar?: string): string => {
    if (bar) {
        return `${foo}、${bar}`; 
    }
    return `${foo}`;
}
console.log('1:' + greeting('おはよう'));
console.log('2:' + greeting('おはよう', undefined));
console.log('3:' + greeting('おはよう',null));
console.log('4:' + greeting('おはよう','エミリー'));

// 引数に既定値を設定
let greeting2 = (foo: string, bar: string="エビリワン"): string => {
    if (bar) {
        return `${foo}、${bar}`; 
    }
    return `${foo}`;
}
console.log('1:' + greeting2('おはよう'));
console.log('2:' + greeting2('おはよう', undefined));
console.log('3:' + greeting2('おはよう',null));
console.log('4:' + greeting2('おはよう','エミリー'));

// 可変長引数
function sum(...values: number[]) {
    let result = 0;
    // 配列の内容を順に足しこむ
    for (let value of values) {
        result += value;
    }
    return result;
}
console.log(sum(1,2,4,5,6));

// オーバーロード
function show(value: number): void;
function show(value: boolean): void;
function show(value: any): void {
    if(typeof value === 'number') {
        console.log(value.toFixed(0));
    } else {
        console.log(value ? '真':'偽');
    }
}
show(10.345);
show(false);
// show('hoge'); // コンパイルエラー！



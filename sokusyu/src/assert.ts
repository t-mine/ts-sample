function show(result: string) {
    return `結果は${result}です。`;
}

// コンパイルエラー
// console.log(show(100));

// any型に変換。これが型アサーション。
console.log(show(<any>100));


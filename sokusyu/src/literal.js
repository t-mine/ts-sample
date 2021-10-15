// 数値リテラル 16進数
var num1 = 0xFF;
console.log(num1);
// 数値リテラル 2進数
var num2 = 3;
console.log(num2);
/**
 * テンプレート文字列
 * ・文字列に変数を埋め込める
 * ・複数行に跨る文字列を表現可能
 */
var mail = 'admin@example.com';
var msg = "\u30EC\u30D3\u30E5\u30A2\u30FC\u52DF\u96C6\u4E2D\uFF01\n\n\u66F8\u7C4D\u306E\u3054\u611F\u60F3\u3092\u662F\u975E\u304A\u805E\u304B\u305B\u304F\u3060\u3055\u3044\u3002\n\u5F0A\u793E\u30B5\u30DD\u30FC\u30C8\u30B5\u30A4\u30C8\u3001SNS\u306A\u3069\u3067\u7D39\u4ECB\u3055\u305B\u3066\u3044\u305F\u3060\u304D\u307E\u3059\u3002\n\uFF08\u9001\u4ED8\u5148\uFF1A" + mail + "\uFF09\n";
console.log(msg);

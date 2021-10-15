// 数値リテラル 16進数
let num1: number = 0xFF;
console.log(num1);

// 数値リテラル 2進数
let num2: number = 0b11;
console.log(num2);

/**
 * テンプレート文字列
 * ・文字列に変数を埋め込める
 * ・複数行に跨る文字列を表現可能
 */
const mail = 'admin@example.com';
const msg = `レビュアー募集中！

書籍のご感想を是非お聞かせください。
弊社サポートサイト、SNSなどで紹介させていただきます。
（送付先：${mail}）
`
console.log(msg);
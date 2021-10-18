### part1

```
npm install -g typescript
```

### part5:高度な型

#### ■ unknown 型

どんな型の値でも代入できるが、型チェックした if 文の中でしか型が持つメソッドを使用できない。

#### ■ null/undefined を禁止する strictNullChecks オプション

tsconfig.json で strict、または strictNullChecks オプションに true を設定することで、
すべての型での null/undefined を禁止できる。

#### ■ strictNullChecks オプション有効時に null/undefined を許可

```
let data1 = string | undefined = undefinded;
```

#### ■ null/undefined チェック 「?」演算子

```
let hoge:string | null;
let result = hoge?.trim();

hoge?.foo?.bar();
```

#### ■ null/undefined の場合にデフォルト値を設定「??」演算子

```
let hoge:string | null;
console.log(str?.length ?? 0);
```

#### ■ リテラル型と型エイリアス

リテラル型には string、number、boolean、enum などが使える。

```
type FalsyType = ''|0|false|null|undefined;
type DiceType = 1|2|3|4|5|6
enum Subject {JAPANESE, MATH, SCIENCE, SOCIAL_STUDY, ENGLISH}
type SciencePart = Subject.MATH | Subject.SCIENCE;
```

### part6:オブジェクト指向構文

```
tsc -t es2020 ./src/part6.ts
```

みたいにしないとコンパイルできない。
tsconfig.json で compilerOptions の target に es2020 を設定しても効かなかった。

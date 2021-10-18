// クラス
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show(): string {
    return `${this.name}は${this.age}歳です。`;
  }
}

let p = new Person("八九寺真宵", 11);
console.log(p.show());

// functionは使える
function a() {
  console.log("a");
}
a();

// 型としてのthis
class MyClass {
  constructor(private _value: number) {}

  get value(): number {
    return this._value;
  }

  plus(value: number): this {
    this._value += value;
    return this;
  }

  minus(value: number): this {
    this._value -= value;
    return this;
  }
}

let myClass = new MyClass(10);
console.log(myClass.plus(10).minus(5).value);

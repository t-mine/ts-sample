{
  // classではなく、オブジェクトの型としてインターフェースを利用できる。
  interface Car {
    type: string;
    run(): void;
  }
  let c: Car = {
    type: "トラック",
    run() {
      console.log(`${this.type}が走ります。`);
    },
  };
  c.run();

  // 変数定義時の型にインターフェース定義を記述できる
  let cl: {
    type: string;
    weight: number;
  } = {
    type: "軽トラック",
    weight: 750,
  };

  // プロパティシグネチャ
  interface Person {
    readonly name: string; // readonlyはそのままの意味
    age?: number; // ?は省略可能を表す
  }
  let p: Person = {
    name: "田中太郎",
  };
  // p.name = "hoge"; // コンパイルエラー

  // 関数の型(コールシグネチャ)
  interface Calculate {
    (x: number, y: number): number;
  }
  let add: Calculate = function (a: number, b: number): number {
    return a + b;
  };

  // メソッドの型(メソッドシグネチャ)
  interface Calculate2 {
    add(x: number, y: number): number;
    // 下記のような書き方も可能
    // (x: number, y: number): number;
  }
  let obj: Calculate2 = {
    add(a: number, b: number): number {
      return a + b;
    },
  };
}

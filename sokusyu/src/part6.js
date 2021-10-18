// クラス
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        return this.name + "\u306F" + this.age + "\u6B73\u3067\u3059\u3002";
    };
    return Person;
}());
var p = new Person("八九寺真宵", 11);
console.log(p.show());
// functionは使える
function a() {
    console.log("a");
}
a();
// 型としてのthis
var MyClass = /** @class */ (function () {
    function MyClass(_value) {
        this._value = _value;
    }
    Object.defineProperty(MyClass.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    MyClass.prototype.plus = function (value) {
        this._value += value;
        return this;
    };
    MyClass.prototype.minus = function (value) {
        this._value -= value;
        return this;
    };
    return MyClass;
}());
var myClass = new MyClass(10);
console.log(myClass.plus(10).minus(5).value);

# ES6
1. [Reference:](#reference)
1. [History](#history)
1. [Arrow Function](#arrow-function)
1. [Classes](#classes)
1. [Block Scope: let + const](#block-scope)
1. [Default Values and the Gather/Spread Operator](#default-values-and-the-gather-spread-operator)
1. [Destructuring](#destructing)
1. [Object Literal Extensions](#object-literal-extensions)
1. [Template Strings](#template-strings)
1. [Modules](#modules)
1. [Module Loaders](#module-loaders)
1. [Collections](#collections)
1. [Proxies](#proxies)
1. [Promises](#promises)
1. [Math number string array objects](#math-number-string-array-objects)
1. [Binary and Octal literals](#binary-and-octal-literals)
1. [Reflect Api](#reflect-api)
1. [Tail calls](#tail-calls)
1. [Symbols Iterators and Generators](#symbols-iterators-and-generators)

***
## Reference:
1.1.1 ES6: http://blog.thefirehoseproject.com/posts/12-reasons-es6-future-javascript-web-development/

1.1.2 ES6 Features
https://github.com/lukehoban/
http://es6-features.org/#Constants

1.1.3 JS Engines: https://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/

1.1.4 Transpilers: https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them

## History
1.2.1 What's is ECMAScript ?
> ECMAScript là một tiêu chuẩn hóa đặc điểm kĩ thuật dựa trên Javascript, có cấc phiên bản nâng cấp và bổ sung cần thiết cho JS như ES6, ES7.

1.2.2 What is JavaScript Engine ? Can you name a few JavaScript Engine used in some popular Browsers such as Chrome, Firefox, IE
> Engine là cái máy chạy lệnh JS, ví dụ V8 trên Chrome, Rhino hay Spidermonkey trên fiefox.

1.2.3 What is Future JavaScript ?
> ES6, ES7, ES8.

1.2.4 What is problem you have if you want to use Future JavaScript in Present Browsers?
> Nhiều trình duyệt chưa hỗ trợ hoặc hỗ trợ đầy đủ tính năng nên không thể tận dụng hết sức mạnh của các phiên bản mới.

1.2.5 What is transpiler ?
> là một compiler giúp biên dịch từ các phiên bản mới hơn của Js hoặc ngôn ngữ chuyển đổi như Typescript về JS(ES5).

1.2.6 What is Babel ? Try Babel online here: https://babeljs.io/repl/.
> Babel là trình biên dịch của chính Javascript, transpiler từ ES6 qua ES5.

**[⬆ back to top](#es6)**

## Arrow Function
1.3.1 Arrow Function syntax ?
* BASIC SYXTAX
```Javascript
(param1, param2, …, paramN) => { statements } 
(param1, param2, …, paramN) => expression 

singleParam => { statements } // 1 param

() => { statements } // no param
```
* ADVANCED SYNTAX
```Javascript
// Parenthesize the body of function to return an object literal expression:
params => ({foo: bar}) 

// Rest parameters and default parameters are supported
(param1, param2, ...rest) => { statements } 
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { 
statements } 

// Destructuring within the parameter list is also supported
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
```

1.3.2 Compare arrow function syntax to ES5 function syntax ?
> `Có thể viết trên 1 dòng, cú pháp tường minh(short and concise) hơn, this sẽ trỏ tới chính object, không bị bind nhầm.`

1.3.3 Arrow function variations, try them in Babel Repl, fix error if any
```Javascript
const f1 = () => 10;
const f2 = _ => 3;
const f3 = (...x) => 3;
const f4 = (x, y) => 3;
const f5 = x => {
  try {
    1;
  } catch (e) {}
}
const f6 = x => { return 10; }
// const f7 = x => { y: x }
const f7 = x => ({
    y: x
})
```
1.3.4 True or false: arrow functions are anonymous ?
> `Arrow functions are always anonymous expression.`
```Javascript
const myFunc = x => 4;
console.log(myFunc.name);
```
1.3.5 Disadvantages: `lost reference outside callback, hard to debug in stack strace`
1.3.6 this
Evaluate the code below, can you explain what happens ?
> `obj.method() log undefined vì this đang nằm trong 1 hàm vô danh và không rõ ràng là được gọi ở đâu, nó chỉ được difined trong hàm setTimeout nên mặc định trỏ tới window.`

> `obj.method() log 10 vì this lúc này tham chiến đến chính đối tượng mà nó được gọi(theo cách gọi theo phương thức)`
```Javascript
var obj = {
  a: 10,
  method: function method() {
    setTimeout(function () {
        console.log(this.a);
    }, 200);
  }
}

var obj2 = {
  a: 10,
  method: function method() {
    setTimeout(() => {
        console.log(this.a);
    }, 200);
  }
}

obj.method(); // ??
obj2.mthod();
```
1.3.7 Promise
Compare 2 Promise call below, what do you think ? If v is null or undefined what will happend ? How you handle that ?
```Javascript
p.then(function (v) { return v.id });

p.then(v => v.id);
```
1.3.8 Exercise 01: rewrite all function below with arrow functions and try to avoid curly braces {} as much as possible
```Javascript
(() => {

  function foo(x) {
    var y = x * 2;

    return function bar(z,baz) {
      if (z.length > 3) {
        return z.map( baz = (v){
          if (v > 3) return v + y;
          else return baz( v * 4 );
        } );
      }
      else {
        var obj = [];

        setTimeout( () => {
          obj.length = 1;
          obj[0] = this.w;
        }, 100 );

        return obj;
      }
    };
  }

  var p = foo( 2 );
  var list1 = [1,3,4];
  var list2 = list1.concat( 6 );

  list1 = p.call( { w: 42 }, list1 );
  list2 = p( list2 );

  setTimeout(() => {
    console.log( list1[0] === list2.reduce((s,v) => s + v , 0 ) );
  }, 200 );
})();
```
**[⬆ back to top](#es6)**

## Classes
1.4.1 Provide an example to create a new classed named Person which have 2 fields: id, name and 1 method: sayHello which print hello to the console
```Javascript
class Person {
    constructor() {
        this.id = name;
        this.name = name;
    }
    sayHello() {
        console.log("hello");
    }
}
const fiance = new Person();
fiance.sayHello();
```

1.4.2 What is keyword extends and super, provide an example that used both keyword ?
> `extends khi class con cần kế thừa thuộc tính và phương thức từ một class cha hoặc thậm chí là một function.`
```Javascript
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.hide();
```
> `super.method(...) được dùng để gọi 1 method() của class cha.`

> `super(...) được dùng để gọi 1 constructor trong class cha.`

1.4.3 Consider the following code, what will be printed out?
```Javascript
class Cha {
  constructor() { this.id = 'a' }
  method() {
    console.log('Cha', this.id)
  }
}

class Con extends Cha {
  method() {
    super.method();
    console.log('Con', this.id)
  }
}
// Cha A & Con a.
```
1.4.4 What is static keyword ?

**[⬆ back to top](#es6)**

## Block Scope
1.5.1 Compare let and var
> `The scope of a variable defined with` *var* `is function scope or declared outside any function, global. The scope of a variable defined with` *let* `is block scope.`

> *let* `will not hoist to the entire scope of the block they appear in`

1.5.2 Closures scope, how do let work in closures, try example below
> ***`let`*** `trong clossure scope không thể hoist được nên mỗi lần let i thì sẽ tạo một block scope cho biến i có giá trị tương ứng.`
```Javascript
for (let i = 0; i < 3; i++) {
  let btn = document.getElementById('btn' + i);
  btn.addEventListener('click', () {
    alert(i);
  });
}
```
1.5.3 What is const ? Example ?
> `Const là từ khóa khai báo biến với giá trị không đổi(immutable), không thể gán cho biến đó với một giá trị khác.`

1.5.4 Exercise: fix code below (anywhere) so the console.log will display true
* *Before*
```Javascript
var x = 2, fns = [];

(function(){
  var x = 5;

  for (var i=0; i<x; i++) {
  }
})();

console.log((x * 2) === fns[x*2]()); // must be true
```
* *After*
```Javascript
// Here is fixed code from Babel
const x = 2, fns = [];

( () => {
  const x = 5;

  for (let i=0; i<x; i++) {
    // fns[i] = () => i;
    // fns = fns.concat(_ => i); must let fns = []
    fns.push(_ => i);
  }
})();

console.log((x * 2) === fns[x*2]())
```
**[⬆ back to top](#es6)**

## Default Values and the Gather Spread Operator
1.6.1 Default Values: how to define a functon with default value in ES5 ? And in ES6 ?
```Javascript
//ES5
function multiply(a, b) {
  b = (typeof b !== 'undefined') ?  b : 1;
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
```

```Javascript
//ES6
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5, 1); // 5
multiply(5);    // 5
```
> `Qua 2 example này có thể nhận ra default value là giá trị mặc định mà ta gán cho biến và sử dụng value đó nếu không thay đổi giá trị của biến.này có thể nhận ra default value là giá trị mặc định mà ta gán cho biến và sử dụng value đó nếu không thay đổi giá trị của biến.`

1.6.2 Lazy expression, evaluate the following code, how many times g have been called ?
```Javascript
function g() {
  console.log('g');
}

function f(x = g()) {
}

f(1); // f(1) => x = 1 => ko gọi ra undefined
f(); // f() => x = g() => gọi g console.log ra g
f(); // f() => default x = g() => gọi g console.log ra g
```
1.6.3 Evaluate the following code
```Javascript
var x = 1;

function f(x = 2, fn = function() { return x }) {
  console.log(fn());
}

f();
// gọi f() không truyền tham số => 
// default là x = 2, fn = function() { return x } =>
// log fn() => return ra x => x không có trong scope của fn => 
// x có trong scope cỉa f =>
// return 2
```
1.6.4 What's a variadic arguments?
```javascript
const abccc = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

abccc(1, 2, 3, 4, 5)
  1
  2
  [3,4,5]
```
> ***variadic arguments*** `truyền nhiều đối số vào chung một tham số => array.`

1.6.5 What is arguments in a JavaScript function ?
> là đối số truyền giá trị vào tham số.

1.6.6 … operator can be used in 2 differents ways, see code below:
```Javascript
function f(...args) { // gather arguments
}

var x = [1, 2, 3];
var y = [4, 5];
var z = [0, ...x, ...y ]; // spread out
1.6.7 In which way the … operator is used in following code
function g(...arr) { // ???
}

var a = [1, 2, 3];
var b = [4, 5, 6];

g(...a, ...b); // ???
```
1.6.8 Exercise: fix the following code so console.log will print true
```Javascript
const f = (...arg) => arg; 

function g() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  a1 = a1.splice(0, 1);
  a2 = a2.splice(1, 3);

  return f(...a1,...a2);
}

console.log(g().join("") === "281012"); // must print true
```
**[⬆ back to top](#es6)**

## Destructuring
1.7.1 What is destructuring ? Example ?
> `Dùng Destructuring để chuyển giá trị từng thuộc tính của đối tượng vào một biến. Điều này giúp giảm bớt việc dùng các biến tạm thời để lưu các thuộc tính trong đối tượng.`

1.7.2 Can you use destructuring and default values together ? Provide example?
> Dùng được destructuring lẫn default.
```Javascript
const Ob = {
  name: 'Phuoc'
}

const {name= 'Tingfu', weakness= 'mind'} = Ob;
console.log(name);
console.log(weakness);
```

1.7.3 Dumping values: provide example that extract the 3rd element in an array and don't care about the 1st, 2nd element ? Provide example that swap 2 numbers ?
```Javascript
const arr = [1,2,3];
const [,,a] = arr;
console.log(a);
```
```javascript
const arr = [1,2];
let [a,b] = arr;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);
```

1.7.4 Nested Array Destructuring: in case we have an array like this [[1, 2], [3, 4], [5, 6]] use destructuring to extract the number 1 to variabled called a
```javascript
const arr = [[1, 2], [3, 4], [5, 6]];
const [[a,]] = arr;
console.log(a); // 1
```

1.7.5 Object Destructuring: provide an example that use destructuring to extract property in an object ?
```javascript
const obj = {
  name: 'Phuoc',
  career: 'dev'
}
const {name, career} = obj
console.log(name);
```

1.7.6 Nested Object Destructuring: in case we have an object like this { nested: { a: 10 } }, provide an example that use destructuring to extract value of a in inside nested object
```javascript
const obj = { nested: { a: 10 } };
const {nested: {a}} = obj;
console.log(a);
```

1.7.7 Destructuring and Function Parameters: consider the array destructuring for parameters what will be printed out ?
```Javascript
function fn([ x, y ]) {
  console.log(x, y);
}

fn([ 1, 2 ]); // 1 2
fn([ 1 ]); // 1 undefined
fn([ ]); // undefined undefined
```
1.7.8 Exercise: practice object destructuring, object constructuring
```Javascript
function ajax(url,cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [ 6, 8, 10 ],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 === (
      data.foo +
      data.bar +
      data.baz[0] + data.baz[1] + data.baz[2] +
      data.bam.qux +
      data.bam.qam
    )
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

function response(/* TODO: object destructuring */) {

  check({
  /* TODO: object constructuring */
  });

}

ajax("http://fun.tld",response);
```
**[⬆ back to top](#es6)**

## Object Literal Extensions
1.8.1 Concise properties: consider the following code what do you think ?
```Javascript
var x = 2, y = 3;
var o1 = {
  x: x,
  y: y
}

var o2 = {
  x,
  y
}
console.log(o1); // ??
console.log(o2); // ??
```
1.8.2 Concise Methods: consider the following code what do you think ?
```Javascript
var o1 = {
  x: function() {
    console.log('o1.x');
  },
  y: function() { }
}

o1.x();

var o2 = {
  x() {
     console.log('o2.x');
  },
  y() {}
}
o2.x();
```
1.8.3 ES5 Getter/Setter: consider the following code
```Javascript
var o = {
  _id: 10,
  get id() { return this._id++; },
  set id(v) { this._id = v; }
}

o.id; // ??
o.id = 100;
o.id; // ??
```
**[⬆ back to top](#es6)**

## Template Strings
1.9.1 Template Strings: what is template strings ?
1.9.2 Consider this code below, rewrite it using ES6 template string
```Javascript
var name = 'That Duy';
var chaoDuy = 'Hello ' + name + '!';

console.log(chaoDuy);
console.log(typeof chaoDuy);
```
1.9.3 Interpolated Expression: can we use function inside ${…} if yes provide an example
1.9.4 Tag Functions: consider the code below
```Javascript
function f(strings, ...values) {
  console.log(strings);
  console.log(values);
}

var s = 'Fresher Academy';
f`Hello ${s}`; // ??
```
1.9.5 Exercise
```Javascript
function upper(strings,...values) {
  // TODO
}

var name = 'Nguyen Van A',
  account = 'anv',
  classname = 'Fresher Academ ES6';

console.log(
  `Hello ____ (@____), welcome to the ____!` ===
  'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER ACADEMY ES6!'
);
```
**[⬆ back to top](#es6)**

## Modules
1.10.1 What is module pattern ?
1.10.2 What is ES6 import/export ?
1.10.3 What is export default ? How to import a exported default function ?
1.10.4 Circular Module Dependency: A imports B, B imports A, how does this work ?
**[⬆ back to top](#es6)**

## Module Loaders
**[⬆ back to top](#es6)**

## Collections
1.12.1 Map: what is Map in JS ? How to iterate a Map ? How to get a value ? How to set a value ? How to know if a value is in Map ?
1.12.2 Set: what is Set in JS ? How to iterate a Set ? How to get a value ? How to set a value ? How to know if a value is in Set ?
1.12.3 Weakmap same question like Map ? What is the difference between Map vs Weakmap
1.12.4 Weakset same question like Set ? What is the difference between Set vs WeakSet
**[⬆ back to top](#es6)**

## Proxies
**[⬆ back to top](#es6)**

## Promises
**[⬆ back to top](#es6)**

## Math + number + string + array + objects
1.15.1 Array add of(..), from(..)* and fill(..). Provide example using them
1.15.2 Provide example using Object.is and Object.assign
1.15.3 Provide example using String.repeat and String.includes
**[⬆ back to top](#es6)**

## Binary and Octal literals
**[⬆ back to top](#es6)**

## Reflect Api
**[⬆ back to top](#es6)**

## Tail calls
**[⬆ back to top](#es6)**

## Symbols, Iterators, and Generators
1.19.1 Symbols: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
what is symbols ? provide same
Well-known Symbols?

1.19.2 Iterators: study about Iterators (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
What is Iterators ?
What is the Interface of Iterators ?
Provide an example using Iterator ?
Creating a Custom Iterators

1.19.3 Generators
What is Generators ? What is syntax to create a generator ? How you execute a generator ? How we handle errors in generator ?
Where do you think we should use generator ?

1.19.4 Exercise
```Javascript
var numbers = {
  // ..
};

// should print 0..100 by 1s
for (let num of numbers) {
  console.log(num);
}

// should print 6..30 by 4s
for (let num of /*..*/) {
  console.log(num);
}
```
**[⬆ back to top](#es6)**
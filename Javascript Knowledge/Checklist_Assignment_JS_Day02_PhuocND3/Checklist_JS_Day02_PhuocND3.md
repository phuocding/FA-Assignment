# 1 Scope & Closures
## 1.1 Function Declartion vs Function Expressions
* Xem xét đoạn code sau, em có nhận xét gì?
console.log(b) thà cũng ra như gọi hàm b() vì trong hàm trả về console.log(b)
```Javascript
function b() {
   console.log(b); // ??
}

console.log(b); // ??
b(); // ??
```
* Xem xét đoạn code sau, em có nhận xét gì?
Trả về 2 lần hàm đối với biến a
Hàm b() ở đây chưa được định nghĩa
```Javascript
var a = function b() {
   console.log(a, b); // ??
}

a(); //  ??
b(); // ??
```

## 1.2 What is Scope?
### 1.2.1 Nested Scope
* Xem xét đoạn code sau, em có nhận xét gì ?
Xét thấy scope trong hàm foo() không có biến b nên nó nhảy ra scope bên ngoài cho tới global để tìm biến b, nếu vẫn không tìm thấy thì báo lỗi.
```Javascript
function foo(a) {
  console.log(a + b);
}

var b = 2;

foo(2); // 4
```
### 1.2.2 Errors
* Xem xét đoạn code sau, em có nhận xét gì ?

Xảy ra lỗi vì b1 chưa được khai báo hoặc gán với bất kì giá trị nào.
```Javascript
function f1(a) {
  console.log(a + b1);
}

f1(2);
```
* Xem xét đoạn code sau, em có nhận xét gì ?

Vì là gán giá trị của a cho b2 trong scope f2() nên máy sẽ hiểu đã tồn tại biến b2.
```Javascript
function f2(a) {
  b2 = a;
  console.log(a + b2);
}

f2(2);
```
* Nếu thêm strict mode vào f1 và f2 thì chuyện gì xảy ra ?
TH f1() nó sẽ báo lỗi ngay ở dòng console.log().
TH f2() sẽ báo lỗi b2 chưa được defines tại dòng b2 = a
## 1.3 Lexical Scope
* Xem xét đoạn code sau, kết quả in ra là gì ? em có thể giải thích tại sao? có bao nhiều scope đc tạo ra ? Trong từng scope có những biến gì ?
3 scope:
Global scope: foo()
foo() local scope: a, b, bar
bar() local scope: c
```Javascript
function foo(a) {

  var b = a * 2;

  function bar(c) {
    console.log(a, b, c);
  }

  bar(b * 3);
}

foo(2); // 2 4 12
```

## 1.4 Function vs Block Scope
* Xử dụng IIFE để tạo function scope
Trong JS có cách nào để tạo block scope?
Sử dùng trong for hoặc if, khai báo biến trong ngữ cảnh của for hoặc if, vì vậy sẽ lỗi nếu dùng biến đó trong hàm.

## 1.5 Hoisting
* Xem xét đoạn code sau, em có nhận xét gì ?
Assign biến trước khi declare biến, việc khai bao biến sẽ tự nhảy lên first line của top, mọi thứ tự code còn lại không thay đổi.
```Javascript
a = 2;

var a;

console.log( a );
```
* Xem xét đoạn code sau, em có nhận xét gì ?
log() trước mới declare biến
```Javascript
console.log( a );

var a = 2;
```
* Từ 2 ví dụ trên, theo em hoisting là gì ?
các khai báo biến và hàm được biên dịch trước khi thực thi.

* Em có nhận xét gì về đoạn code sau:
```Javascript
foo();

function foo() {
  console.log( a ); // undefined

  var a = 2;
}
```
## 1.6 Scope Closures
* Xem xét đoạn code sau, em có nhận xét gì ?
```Javascript
function foo() {
  var a = 2;

  function bar() {
    console.log( a );
  }

  return bar;
}

var baz = foo();

baz(); // ???
```
* Theo em closure là gì ?
Closure là khi hàm có khả năng ghi nhớ được scope của nó kể cả khi hàm được gọi ở bên ngoài scope đó.
Closure cho phép 1 hàm bên trong truy cập đến scope và biến của hàm bên ngoài chưa nó. Tạo 1 closure rồi return nó.
# 2 Assignment
## Tạo hàm range(a, b) trả về array các số tự nhiên liên tiếp từ a => b. Ví dụ: range(1, 4) = [1, 2, 3, 4]
## Tạo hàm sum(array) tính tổng các số trong array. V/d sum([1, 2, 3, 4]) = 10;
## Tính sum(range(1, 10))
## Xử dụng lệ quy để viết hàm isEven(n); isEven(10) => true; isEven(3) => false
## Viết nốt body của hàm dưới, sao cho khi gọi sẽ hiện thị như comment
```Javascript
function print(fn, s) {
  // TODO
}

print(console.log, 'a'); // hiển thị 'a'
print(console.log, 10); // hiện thị 10
Viết nốt body của hàm dưới, sao cho khi gọi sẽ hiện thị như comment
function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b;
}

function op(fn, a, b) {
  // TODO
  return ...;
}

var opAdd = op(add);
opAdd(1, 2); // trả về 1 + 2

var opSub = op(sub);
opSub(3, 2); // trả về 3 - 1
```
## Viết hàm repeat nhận 2 tham số, tham số đầu tiên là 1 hàm fn, tham số thứ 2 là n, và gọi hàm fn n lần. Ví dụ:
```Javascript
function foo() {
   console.log('a');
}

function repeat(fn, n) {
// TODO
}

repeat(foo, 10); // hiện thị ra a 10 lần
```

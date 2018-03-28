# 1 Programming Code
Program là chương trình cho phép trình duyệt chạy, source code là tập hợp các dòng lệnh cho phép thao tác từ user, code là những dòng text được định nghĩa sẵn bởi một ngôn ngữ lập trình mô phỏng theo ký tự của con người nhưng có thể mã hóa cho máy hiểu và chạy.
syntax là là cú pháp câu lệnh được định nghĩa sẵn.
# 2 Statements
statement (câu lệnh) là công việc có nhiệm vụ thực thi thông qua trình duyệt.
Giải thích câu lệnh sau:
a là kết quả của phép tính b + 2 => bắt trình duyệt hiểu.
```Javascript
a = b + 2;
```
# 3 Expressions
expression (biểu thức) là tập hợp của nhiều toán tử, literals và variable. Nó trả về giá trị, khác với statements có thể trả về hoặc không.
Câu lệnh sau có bao nhiêu biểu thức: 1
```Javascript
a = b * 2;
```
# 4 Executing a Program
Chạy chương trình gồm các bước máy dịch ra theo mã hóa, thực thi theo thứ tự trên xuống, nếu gặp lỗi thì thông báo dừng lại.
làm sao máy tính có thể hiểu đc câu lệnh a = b * 2:
Máy sẽ hiểu như sau: À thằng đó cho cái biến a gán giá trị gấp đôi lần biến b

interpreting là gì ?
Nó là thông dịch, tức là dịch từng dòng lệnh một ở trên code, tương tự như thông dịch viên ngồi trong cabin của một conference nào đấy có nhiều người với nhiều ngôn nguwx khác nhau

compiling là gì ?
Cái này là biên dịch, tức dịch tất tần tật mọi thứ rồi mới thực thi, như người ta dịch một cuốn sách rồi mới đem xuất bản vậy.

JS là dạng interpreted.
Sử dụng Developer Tools của Google Chrome hoặc Firefox để chạy chương trình sau:
```Javascript
a = 21;

b = a * 2;

console.log( b );
```
# 5 Operators
Hiểu về operators trong JS, có các loại chính là:
Assignment =
Math: +,-,*,/
Compound Assignment: +=, -, *, /=
Increment/decrement: ++, –
Object Property Access: .
Equality: =, ==, !=, !==
Comparison: <, >, <=, >=
Logical: &&, ||
# 6 Values & Types
JS có bao nhiêu kiểu data types? liệt kê từng kiểu và ví dụ
String: var a = "Nodejs Class"
Number: var a = 10
Boolean var a = 10 > 2(true)
Array: var a = [1,2,3]
Object: var Class = {grade: 01, name: "Nodejs", place: "Hanoi"}
Undefined: var a hoặc assign a = undefined;
Thay xxx bằng operator để xác định kiểu của dữ liệu trong JS ?
```Javascript
a = "hello";
typeof(a); // "string"

a = 42;
typeof(a); // "number"

a = true;
typeof(a); // "boolean"

a = null;
typeof(a); // "object"

a = undefined;
typeof(a); // "undefined"

a = { name: 'A' };
typeof(a); // "object"
```
# 7 Objects
Đối tượng là gì ?
Object là một thực thể có đặc điểm tính chất đặc trưng(property) cũng như hành động suy nghĩ(method()). Object trong Javascript là đối tượng sở hữu nhiều tên gọi và giá trị kèm theo (key/value), value có thể là chuỗi, số hay một hàm

Có những cách nào để truy xuất dữ liêu trong đối tượng
Truy xuất dữ liệu:
Property: Object.property hoặc Object["property"]
Method: Object.method()
Cho đoạn code sau, chỉ rõ gía trị của ??? là gì
```Javascript
var o = {
  a: 'hello',
  b: 10,
  c: true
};

o.a; // ???
o.b; // ???
o.c; // ???

o['a']; // ???
o['b']; // ???
o['c']; // ???

var k = 'a';
o.k; // ???
o[k]; // ???
```
# 8 Arrays
Arrays là gì ? làm sao tạo 1 array [1, 2, 3];
Cho đoạn code sau, chỉ rõ gía trị của ??? là gì
```Javascript
var a = [
  'hello',
  10,
  true
];

a[0]; // Hello
a[1]; // 10
a[2]; // true
arr.length; // 3
typeof a; // Object
```
Làm sao để phân biệt array và object?
Array thì được xếp theo thứ tự
Object được xếp theo chủ đề
# 9 Functions
Function là gì ? Là một khối block dùng để thực thi chức năng nào đấy khi gọi hàm, có mục đích reuse/tái sử dụng lại nhiều lần
1 hàm gồm những thành phần nào ? Hàm gồm tên hàm() {//Thân hàm do sth}
Có những cách nào để định nghĩa functions ? so sánh?
Functional Statement: function Abc(params){}
Functional Expression: var Abc = function(params) {}
Cho đoạn code sau, chỉ rõ gía trị của ??? là gì
```Javascript
function f() {
  return 10;
}

f.a = 'Hello';

typeof f; // function
typeof f(); // number
typeof f.a; // string
typeof f.b; // undefined
```
# 10 Built-In Type Methods
Cho đoạn code sau, chạy trên Console của Chrome, theo em length, toUpperCase, toFixed là gì ?
length: là thuộc tính tìm ra độ dài của chuỗi, mảng, ...
toUpperCase() là hàm tự động viết in hoa toàn bộ chuỗi
toFixed() là hàm làm tròn số với phần thập phân là param của hàm toFixed()
```Javascript
var a = 'hello';
var b = 123;

a.length;
a.toUpperCase();
b.toFixed(4);
```
# 11 Comparing Values
Làm sao để so sánh giá trị ?
Dùng toán tử so sánh Comparision Operators

Kết quả của phép so sánh luôn luôn là dạng dữ liệu gì ?
Boolean: true/false

# 12 Coercion/-SHən,kōˈərZHən/
Cho đoạn code sau, chạy trên Console của Chrome, em có nhận xét gì về giá trị của b và c? Từ đó rút ra coercion là gì ?
Ép kiểu trong javascript:
b là explicit coercion(rõ ràng) nhận biết rõ ràng typeof(b) là number
c là implicit coercion(ép kiểu cưỡng ép) không rõ ràng
```Javascript
var a = 10;
var b = Number(a);
var c = a * 1;

a;
b;
c;
```
# 13 Truthy & Falsy
Khi một giá trị không phải boolean cần chuyển sang boolean gì chuyện gì xảy ra? v/d dưới sẽ log ra như nào?
Khi so sánh == boolean được ép kiểu về dạng number
V/d đầu tiên Number(b) = 0, Number(false) = 0 => a đúng.
```Javascript
var a = 10;
var b = '';

if (a) {
   console.log('a is truthy');
}

if (b) {
   console.log('b is truthy');
}
```
# 14 Equality
Có bao nhiêu equality operators? (=, ==, !=, !==)
So sánh khác nhau giữa: = và ==
Sự khác nhau giữa == và ===: == cho phép ép kiểu coercion còn === thì không
# 15 Inequality
Có bao nhiêu inequality operators? (<, >, <=, >=)
# 16 Varibles
Biến (variables) là gì?
Loại giá trị có thể thay dổi, nhằm mục đích theo dõi sự biến đổi

# 17 Function Scopes
Scope là gì ?
Scope là tập hợp chứa các biến, quy tắc và chỉ code trong hàm mới có thể thao tác với biến đó trong scope của nó

Trong JS có những loại scope nào ?
# 18 Conditionals
Các dạng điều kiện trong JS ra sao? (if, if…else, switch, (…) ? (…) : (…)
# 19 Strict mode
Strict mode là gì ?
Javascript là 1 ngôn ngữ khá cẩu thả và lỏng lẻo, vì vậy mà strict mode như là điều kiện nghiêm ngặt bắt buộc code chỉnh chu và đầy đủ hơn

# 20 Functions as Values
Set đoạn code sau, em có nhận xét gì ?
Ta có thể gán hàm như là một biến
```Javascript
var f = function() { }

var g = function abc() { }

console.log(f);

console.log(g);
```
# 21 Immediately Invoked Function Expressions (IIFEs)
Xem xét đoạn code sau, em có nhận xét gì ?
Hàm nó vừa gọi vừa thực thi luôn.
Gọi hàm bằng biểu thức nằm trong () đầu tiên.
() thứ hai cho phép thực thi hàm ngay lập tức.
```Javascript
function a() {
   console.log(abc);
};

(function b() {
   console.log(abc);
})();
```

# 1 this & Object prototype
## 1.1 this
### this là một trong những cơ chế gây rối nhất trong JS, theo em this là gì ?
* This là từ khóa trỏ tới object nơi hàm được gọi, và nó tùy thuộc vào cách mình gọi hàm.
### Cách hiểu 1: this trỏ tới function f, đúng hay sai?
* Sai vì nó trỏ tới window, vì theo cách gọi hàm trực tiếp => this trỏ tới global(window)

```
function f(num) {
  console.log("f: " + num);
  this.count++; // ghi lại gía trị đếm hàm f được gọi bao nhiêu lần
}
f.count = 0;

f(1);
f(2);
f(3);
f(4);
f(5);

// in ra số lần hàm f đc gọi: 5 lần
console.log(f.count); // ???
```
### Cách hiểu 2: this trỏ tới scope của function, đúng hay sai?
* g() là method của hàm f() => this là của global(window)
* vì vậy this sẽ undefined vì không thể tìm thấy biến a ở window => typeError

```
function f() {
  var a = 2;
  this.g();
}

function g() {
  console.log(this.a);
}

f();
```

### So sánh các dạng gọi hàm như code:
* theo cahs 1 thì this nó trỏ tới global(window)
* theo cách gọi 2 thì this trỏ tới object chứa nó
* theo cách gọi 3 sử dụng build-in method thì this chính là tham số đầu tiên của hàm.
* cách 4 mình tạo mới object và gọi nó, thì this chính là object vừa mới tạo
```
function fn() {
}

fn(); // cách gọi 1

var o = {
  method: fn
}

o.method(); // cách gọi 2

fn.call(); // cách gọi 3

new fn(); // cách gọi 4
```

### Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
* This ở đây chính là window, không cần khai báo this cũng được

```
function f() {
  console.log(this.a);
}

var a = 2;

f(); // ??
```

### Cho đoạn code sau, kết quả in ra là gì ?
* Mình đang ở Strict Mode nên việc dùng this trong trường hợp này nó sẽ về dạng undefined => undefined.b => typeError

```
function g() {
  "use strict";
  console.log(this.b);
}

var b = 2;

g(); // ??
```

### Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
* In ra a = 2
### This ở đây là đối tượng o()
```
function f() {
  console.log(this.a);
}

var o = {
  a: 2,
  f: f
};

o.f(); // ??
```

### Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
* in ra 2, hàm gọi theo phương thức thông qua object, this trỏ tới object o
```
function f() {
  console.log(this.a);
}

var o = {
  a: 2,
  f: f
};

var g = o.f;

g(); // ??
```

### Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
* in ra 2,2
* hàm gọi qua build-in method
* gọi hàm g() lỗi g not a function vì g được gán với giá trị của f.apply(o) vừa thực thi.
* this trỏ tới object o(thông số đầu tiên của method)
```
function f() {
  console.log(this.a);
}

var o = {
  a: 2
};

var g = f.apply(o); //in ra 2

f.call(o); // ?? //in ra 2
g(); // ??
```

### Cho đoạn code sau, kết quả in ra là gì ? hàm được gọi theo cách nào? theo em trong trường hợp này this trỏ vào đối tượng nào ?
* a = 2
* Ahàm gọi theo constructor
* This trỏ tới object g vừa tạo

```
function f(a) {
  this.a = a;
}

var g = new f(2);
console.log(g.a); // ???
```

### Viết ví dụ kết hợp cả 4 cách gọi hàm để chỉ ra thứ tự khi gọi hàm ảnh hưởng đến this ra sao?
* gọi hàm trực tiếp fn();
* gọi qua object oject.method(); => this là object.
* gọi hàm qua build-in method: bind(o), apply(o), call(o) => this là params đàu tiên của hàm.
* gọi hàm kiểu constructor, dùng keyword new => this là object mới được tạo ra.
#### Từ đó theo em quy tác để xác định this là gì?
* **This là từ khóa tham chiếu đến đối tượng nơi hàm được gọi và phụ thuộc vào cách gọi đối tượng đó mà nó sẽ tham chiếu đến.**

## 1.2 Objects
###Liệt kê lại 6 kiểu nguyên thuỷ trong JS ? liệt kê những kiểu Object có sẵn trong JS?
* 6 kiểu nguyên thủy: number,string,boolean,null,undefined,symbol.
* object có sẵn như: math, date. 
### Có những cách nào để clone 1 object ?
* parse(JSON.stringtify(obj));

* Trong ES6 có method Object.assign(), nó sẽ sao chép tất cả thuộc tính đếm được mà nó sở hữu từ object này qua object khác
```
var x = {myProp: "value"};
var y = Object.assign({}, x);
```
## 1.3 Iteration
### Có những cách nào để duyệt các phần tử trong 1 array ? Viết code ví dụ
* duyệt theo index: arr[i], i là vị trí phần tử trong array bắt đầu từ 0
* dùng vòng lặp: for, while, do while, map
```
fruits.forEach (function (item, index, array ( {

console.log(item, index );

});
```

### Có những cách nào để duyệt các thuộc tính trong 1 object? Viết code ví dụ
* Duyet theo vong lap
* 
## 1.4 Class Theory
###Nhớ lại OOP là gì ? các thuộc tính của OOP?
* Polymorphism
* inheritance
* encapsulation
* abstraction
### So sánh "class" và "instance"
#### Constructor là gì?
#### Constructor là vòng khởi tạo, nơi mình gán tất cả mọi thứ với biến cục bộ

## 1.5 Prototypes
### Xem xét đoạn code sau, em có nhận xét gì ?
* create() đang tạo đối tượng o2 kế thừa o1 thông qua protoype tên là create
```
var o1 = {
  a: 2
}

var o2 = Object.create(o1);

console.log(o2.a); // ??

o1.a = 10;
console.log(o2.a); // ??
```

### Tìm hiểu về Oject.prototype
* Prototype là kiểu object được tạo ra song song khi một object được tạo ra, nó mang trong mình đầy đủ thuộc tính và phương thức của object đó và để cho những object con kế thừa chúng. Khi hai object con được kế thừa object cha thì chúng cùng cha.

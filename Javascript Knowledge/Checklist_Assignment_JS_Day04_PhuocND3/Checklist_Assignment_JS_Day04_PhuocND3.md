# JS 04
***
## 1 Async
### 1.1 Sync vs Async
Sync code (code đồng bộ) là gì ?
Async code (code bất đồng bộ) là gì ?
Theo em JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ
### 1.2 setTimeout
[Cho hàm setTimeout có định nghĩa như sau: ](https://www.w3schools.com/jsref/met_win_settimeout.asp)
Set đoạn code sau, hãy mô tả chính xác những gì xảy ra và kết quả in ra là gì ?
```
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 1000);
How about this one, can you guess ?
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 0);
console.log('Hi again');
```

Từ ví dụ trên em có nhận xét gì ?
### 1.3 Event Loop
Tìm hiểu về Event loop, và giải thích lại đoạn code trên theo ý hiểu của em. [Reference: ](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
### 1.4 Callbacks
Tìm hiểu về callback funtions trong JS (https://www.sitepoint.com/callbacks-javascript/)
Người ta nói callback functions đóng gói tính liên tục của chương trình. Theo em chương trình dưới sẽ được chạy liên tục ra sao? Ví dụ 
```
(1) => (2) => (3)
// (1)
setTimeout(function () {
  // (2)
}, 1000);
// (3)
```

#### 1.4.1 Nested/Chained Callbacks
Set đoạn code sau, khi người dùng click vào btn thì điều gì xảy ra?
```
// (0)
var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  // (1)
  setTimeout(function () {
    // (2)
  }, 1000);
  // (3)
});
```

Theo eo những điểu bất lợi của callbacks là gì ? liên quan đến: code readability, code security, handle errors code, code reusability
### 1.5 Promises
[Tìm hiểu về Promises: ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
What is a future value ?
Promise value ?
Promise Events ?
How to get Promise value?
How to handle error in Promise ?
How to chain Promises ?
Promise.all
Promise.race
finally
# JS 04
***
## 1 Async
### 1.1 Sync vs Async
+ Sync code (code đồng bộ) là gì ?
  <p>Là code được chạy lần lượt, từ trên xuống dưới từ trái qua phải.</p>
+ Async code (code bất đồng bộ) là gì ?
  <p>Hàm này có thể chạy trước hàm hay code ở trên mà không phải nằm trong trạng thái chờ.</p>
+ Theo em JavaScript là ngôn ngữ đồng bộ hay bất đồng bộ
  <p>JS là bất đồng bộ.</p>
### 1.2 setTimeout
Cho hàm setTimeout có định nghĩa như sau: [met win setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)
Set đoạn code sau, hãy mô tả chính xác những gì xảy ra và kết quả in ra là gì ?
<p>Log ra "Hi", sau đó 1s log ra "there"</p>

```
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 1000);
```

How about this one, can you guess ?
<p>log ra "hi" rồi "hi again" rồi mới log ra "there"</p>

```
console.log('Hi');

setTimeout(function () {
  console.log('there');
}, 0);
console.log('Hi again');
```

- Từ ví dụ trên em có nhận xét gì ?
<p>Hàm setTimeout là 1 hàm xử lí bất đồng bộ.</p>
<p>Nó sẽ ko thực thi đoạn code cho tới hết delay-time, dù đã hết thì nõ cũng sẽ được đưa và hàng chờ(message queue).</p>

### 1.3 Event Loop
Tìm hiểu về Event loop, và giải thích lại đoạn code trên theo ý hiểu của em. [Reference: Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
<p>Vòng lặp lấy từng message yêu cầu trong queue và đưa đi xử lí, xử lí xong lại lặp lại chu kì như vậy</p>

### 1.4 Callbacks
- Tìm hiểu về callback funtions trong JS: [Callbacks function](https://www.sitepoint.com/callbacks-javascript/)
<p>Trong JS, fn == obj => có thể truyền đối sốlà 1 hàm, vì vậy có thể return 1 fn khác.</p>
<p>Callbacks() có thể được khởi tạo ở bất cứ đâu bằng cách truyền 1 function có tên vào làm đối số của hàm mà nó được gọi bên trong</p>

- Người ta nói callback functions đóng gói tính liên tục của chương trình. Theo em chương trình dưới sẽ được chạy liên tục ra sao? Ví dụ
<p></p>

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
### Example about ***return***

- mặc định sau return sẽ có một dấu ";" để kết thúc dòng lệnh

```
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```
### Exp ve operator

```
console.log(0.1 + 0.2 == 0.3); 
// trả về false
// vì giá trị của 0.1+0.2 = 0.30000000000000004;
// dùng hàm Math.abs để tính giá trị tuyệt đối rồi so sánh nếu muốn trả về true
```

### Callbacks thong qua setTimeout()

```
(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();

// thứ tự chạy (1) => (4) => (3) => (2)
// (1) & (4) chỉ đơn giản là log ra
// (2) & (3) là hàm setTimeout() nên có thời gian delay
// (3) mặc dù delay 0ms tuy nhiên nó chỉ được đưa vào event queue để chờ tới lượt thực thi tiếp theo
```

### Closure
- Một closure có khả năng nhớ được scope cha của nó, kể cả khi nó được gọi bên ngoài scope của hàn cha đó

```
// Dùng closure để thực thi với for loop ra các giá trị liên tiếp
// for (var i = 0; i < 5; i++) {
//	setTimeout(function() { console.log(i); }, i * 1000 );
// };
// cách giải quyết: dùng let trong ES6
// sẽ in ra đều i = 5 
// cách giải quyết

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}
```
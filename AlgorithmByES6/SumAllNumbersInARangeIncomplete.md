## ES6
> 1st Way.
```Javascript
const sumAll = (arr) => {
	let sum = 0

    if (arr[0] > arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]]
  
  	for( let i = arr[0]; i <= arr[1] ; i ++) sum += i
  
  	return sum
}
sumAll([1, 4]);
sumAll([10, 5]);
```
> 2nd Way: replace filter() or reduce() by `for`, not using min&max. Not yet
```Javascript
// Here is not my code.
const sumAll = (arr) => {
    if (arr[0] > arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]]
  	return Array.apply(null, Array(arr[1] - arr[0] + 1))
                .map((_, i) => arr[0] + i)
                .reduce( (a, b) => a + b,0);
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));
```
## ES5
```Javascript
var sumAll = function sumAll(arr) {
  var sum = 0;

  if (arr[0] > arr[1]) {
    ;

    var _ref = [arr[1], arr[0]];
    arr[0] = _ref[0];
    arr[1] = _ref[1];
  }for (var i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }return sum;
};
sumAll([1, 4]);
sumAll([10, 5]);
```

> 2nd Way: replace filter() or reduce() by `for`, not using min&max. Not yet
```Javascript
var sumAll = function sumAll(arr) {
    if (arr[0] > arr[1]) {
        ;
        var _ref = [arr[1], arr[0]];
        arr[0] = _ref[0];
        arr[1] = _ref[1];
    }return Array.apply(null, Array(arr[1] - arr[0] + 1)).map(function (_, i) {
        return arr[0] + i;
    }).reduce(function (a, b) {
        return a + b;
    }, 0);
};
```
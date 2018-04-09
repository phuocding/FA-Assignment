## **ES6**

> `Drop it`

```Javascript
const dropElements = (arr, func) => {
  let newArr = [];
  for ( let i in arr) {
    if(func(arr[i])) return newArr = arr.slice(i);
  }
  
  return newArr;
};

dropElements([1, 2, 3, 4], (n) => n > 5);
```

> `Finder Keepers`

```Javascript

const findElement = (arr, func) => {
  let num = [];
  num = arr.filter(func);
  return num[0];
};

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
```
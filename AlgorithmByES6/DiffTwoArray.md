## ES6
```Javascript
// With Babel

function diffArray(arr1, arr2) {
  	let a = new Set(arr1);
    let b = new Set(arr2);
  
	let newArr1 = [...new Set(
    [...a].filter(x => !b.has(x))
    )];
  
  	let newArr2 = [...new Set(
    [...b].filter(x => !a.has(x))
    )];
  	
  	let newArr = [...newArr1, ...newArr2];
    return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
```

##ES5
```Javascript
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function diffArray(arr1, arr2) {
  var a = new Set(arr1);
  var b = new Set(arr2);

  var newArr1 = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(a)).filter(function (x) {
    return !b.has(x);
  }))));

  var newArr2 = [].concat(_toConsumableArray(new Set([].concat(_toConsumableArray(b)).filter(function (x) {
    return !a.has(x);
  }))));

  var newArr = [].concat(_toConsumableArray(newArr1), _toConsumableArray(newArr2));
  return newArr;
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
```


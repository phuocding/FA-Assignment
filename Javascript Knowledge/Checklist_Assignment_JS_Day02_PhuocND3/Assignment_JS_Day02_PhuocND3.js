function range(a,b) {
    //return 1 array from a to b, exp range(1,4)=[1,2,3,4]
    var array = [];
    i = b - a + 1;
    while(i--) {
        array[i] = b--;
    }
    return array;
}

function sum(array) {
    // return sum of array, exp sum([1,2,3,4])=10
    var sum = 0;
    for(var i=0; i<array.length; i++) {
        sum += array[i];
    }
    return sum;
}

//calculate sum(range(1,10))
sum(range(1,10));

//using recursion write isEven(n); isEven(10) => true; isEven(3) => false
function isEven(n) {
    if (n === 0) {
        return true;
    }
    else if(n === 1) {
        return false;
    }
    else if(n < 0) {
        return isEven(-n);
    }
    else {
        return isEven(n-2);
    }
}

//Exercise 2
function print(fn, s) {
    // TODO
    fn(s);
}

print(console.log, 'a'); // hiển thị 'a'
print(console.log, 10); // hiển thị 10

//Exercise 3
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b;
}

function op(fn, a, b) {
    // TODO;
    return function (a,b) {
        return fn(a,b);
    } 
}

var opAdd = op(add);
/*
có thể là return ra add();
mà op(add)(1,2) lại ra add();

*/
console.log("trả về 1 + 2 = " + opAdd(1, 2)); // trả về 1 + 2

var opSub = op(sub);
console.log("trả về 3 - 1 = " + opSub(3, 1)); // trả về 3 - 1

/* Viết hàm repeat nhận 2 tham số, 
tham số đầu tiên là 1 hàm fn, 
tham số thứ 2 là n, và gọi hàm fn n lần.*/
function foo() {
    console.log('a');
}

function repeat(fn, n) {
    // TODO
    for(var i=0; i<n; i++) {
        fn(i);
    }
}

repeat(foo, 10); // hiện thị ra a 10 lần
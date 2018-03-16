// function f() {
//     console.log(this.a);
// }

// var o = {
//     a: 2,
//     f: f
// };

// var g = o.f;
// g();

// function f() {
//     console.log(this.a);
// }

// var o = {
//     a: 2
// };

// var g = f.apply(o);

// f.call(o); // ??
// // g();

// 

function f() {
    console.log(this.a);
}

var a = 2;

f();
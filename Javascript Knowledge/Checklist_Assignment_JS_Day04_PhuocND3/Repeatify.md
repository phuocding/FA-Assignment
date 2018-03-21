# Exercise
***
### Create “native” methods
- Knowkedge: inheritance & prototype property.
```
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';

   for (var i = 0; i < times; i++) {
      str += this;
   }

   return str; 
};

console.log('hello'.repeatify(3));
```

### Hoisting
- Knowledge: Hoisting
    - Variables and function be moved at the top of scope, however, variables haven't be assigned value.
```
function test() {
   var a;
   function foo() {
      return 2;
   }

   console.log(a);
   console.log(foo());
   
   a = 1;
}

test();
```

### How this works in JavaScript?
- Knowledge:
    - keyword **this** refer to a object/global object, depend on how to function is invoked, not how it's defined. 

```
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```
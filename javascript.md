# JavaScript

### Give a high level overview of what an object's prototype represents
A prototype is the class that an object inherits from

### What are the differences between the __proto__ and prototype attributes?
Obj.prototype is a property of a Function object. It is the prototype of objects constructed by that function.

Obj.__proto__ is internal property of an object, pointing to its prototype.

### What happens when we do or don't explicity set an object's prototype?
DONT: The default "prototype" is an object with the only property constructor that points back to the function itself.

DO: if we replace the default prototype as a whole, then there will be no "constructor" in it

### What is an object's default prototype?
Obj.prototype = { constructor: Obh }

### What are the valid values for an object's prototype?
Either an Object or NULL

### What are the benefits of a Javascript closure?
Closure allows a function to access variables from an enclosing scope even after it leaves the scope in which it was declared

### Formally define a Javascript closure
Variables defined outside the scope of a function that are used in the function

### Give an example of a closure
```js
function SpringfieldSchool() {
  let staff = ['Seymour Skinner', 'Edna Krabappel'];
  return {
    getStaff: function() { console.log(staff) },
    addStaff: function(name) { staff.push(name) }
  }
}

let elementary = SpringfieldSchool()
console.log(elementary)        // { getStaff: ƒ, addStaff: ƒ }
console.log(staff)             // ReferenceError: staff is not defined
/* Closure allows access to the staff variable */
elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel"]
elementary.addStaff('Otto Mann')
elementary.getStaff()          // ["Seymour Skinner", "Edna Krabappel", "Otto Mann"]
```


## What is data encapsulation?
the idea that some data or functions should not be directly exposed, it's hidden in the closure


### What is the difference between the memory heap and call stack in javascript?
The heap is for memory allocation. The call stack is a list of things to do, one task at a time

### What is one problem with programming languages that a fully single-threaded
It can only sun one thing at a time which can cause slowing

###  Is Javascript a single-threaded language? Explain (Hint: This may not be a yes or no question)
JS by itself is single-threaded, but HTML5 and Node have access to multi-threading behavior

### When is using an IIFE necessary?
An Immediate Invoked Function Expression (IIFE) is a function expression that is called immediately after you define it. It is usually used when you want to create a new variable scope.

### What is the syntax for an IIFE?
The (surrounding parenthesis) prevents from treating it as a function declaration.
The final parenthesis() are executing the function expression.

``` js
var result = [];
for (var i=0; i < 5; i++) {
  result.push( function() { return i } );
}
console.log( result[1]() ); // 5
console.log( result[3]() ); // 5
result = [];
for (var i=0; i < 5; i++) {
  (function () {
    var j = i; // copy current value of i
    result.push( function() { return j } );
  })();
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3
```


### In which phase does hoisting occur?
Compilation phase

### What is the difference between function hoisting and variable hoisting?
Function declarations are completely hoisted. This means that a declared function can be called before it is defined.

Variables are partially hoisted. var declarations are hoisted but not its assignments. let and const are not hoisted.

### What does the new keyword do in Javascript?
1. Creates a new object.
2. Sets the object’s prototype to be the prototype of the constructor function.
3. Executes the constructor function with this as the newly created object.
4. Returns the created object. If the constructor returns an object, this object is returned.

### What type of function is invoked with the new keyword? What does this function return?
Constructor Functions, returns an object



### How can you stop event bubbling?
event.stopPropagation()

### What is the difference between event.target and event.currentTarget?
event.target – the deepest element that originated the event.
event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)

### What does stopImmediatePropagation do?
stops the bubbling and prevent handlers on the current element from running

### What is event delegation?
Event Delegation is using an event handler on the parent of several children to enact the same action on the children, instead of using individual event handlers
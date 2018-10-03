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

## What are the benefits of a Javascript closure?
Closure allows a function to access variables from an enclosing scope even after it leaves the scope in which it was declared

## Formally define a Javascript closure
Variables defined outside the scope of a function that are used in the function

## Give an example of a closure
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
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
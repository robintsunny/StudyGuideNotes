# ALGORITHMS

## RECURSION

### What is a base case in recursion? Why do we need one? Do we always need one?
A base case is a solution to a given problem to build off. If no base case is given, a stack overflow happens.


### What exactly is a Stack Overflow?
when to many recursive calls are made because no base case was given


### Describe direct and indirect recursion
Direct recursive functions call themselves, indirect functions call another function

### What is tail call recursion? Why is it helpful, if at all?
A recursive function is tail recursive when recursive call is the last thing executed by the function. The tail recursive functions considered better than non tail recursive functions as tail-recursion can be optimized by compiler. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function’s stack frame is of no use

### Discuss advantages/disadvantages of recursion
DIS: Recursive program has greater space requirements than iterative program as all functions will remain in stack until base case is reached. It also has greater time requirements because of function calls and return overhead.

ADV: Recursion provides a clean and simple way to write code. Some problems are inherently recursive like tree traversals.

### How is memory allocated during recursive function calls?
A recursive function calls itself, the memory for called function is allocated on top of memory allocated to calling function and different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process continues.


### What is the difference between Memoization and Tabulation?
Memoization is building a lookup table for recursion form the top up, while tabulation builds from the bottom up. Memoization builds a table as calls are made, while tabulation builds a table before calls are made.


### Why is memoization helpful?
it helps cut time with recursive calls by using a look up table

### Select the correct statement(s) about recursion
Tail recursion requires that you don't use any variables in the last line of the code unless you are passing them as arguments to the recursive call


### Which statement(s) about recursion and iteration is/are correct?
A) Recursion is more suited to functional programming because you can more easily create stateless methods
D) Any recursive problem can be done iteratively

## DYNAMIC PROGRAMMING

### What is an optimal substructure? When might a problem have one?
A given problem has Optimal Substructure Property if optimal solution of the given problem can be obtained by using optimal solutions of its subproblems, such as shortest distance between 2 nodes with a node in between

### Choose the correct statement(s) about Dynamic Programming
A) Tabulation will create a complete record of subsolutions from the Bottom-up

### Choose the correct statement(s) about event bubbling
D) Event delegation is useful when you might be dynamically adding children to a parent and you need to execute an action on the child


## MERGE SORT

### Explain the pseudocode for Merge Sort
Sort a collection by breaking it into halves. Then sort those two halves and then merge them together to form one completely sorted collection.

### What is the runtime of merge sort?
Θ(n·log(n))


## COUNTING SORT

### What are the steps for Counting Sort? What is the time complexity?
1. Take an arrayA and iterate through the elements. 
2. In a new arrayB, store how many times an element occurs in arrayA in the index of arrayB
3. Shift a 0 and pop the last element from arrayB
4. ArrayB has the starting positions of the sorted elements in a new ArrayC


## BUBBLE SORT

### What is the time complexity of Bubble Sort? What are the steps for this algorithm?
O(n^2), iterate over elements and swap if element to the right is less than current element. Repeate over array until sorted


### Describe when it may be ideal to utilize Bubble Sort
finding the greatest or smallest k elements


## RADIX SORT

### What is the time complexity of Radix Sort? What are the steps for this algorithm?
Let there be d digits in input integers. Radix Sort takes O(d*(n+b)) time where b is the base for representing numbers, for example, for decimal system, b is 10.

steps are to sort numbers by the 1's digit, then 10's, then 100's, etc

### What is an ideal use-case for Radix Sort?
Sorting for elements between 1 and n^2


<!-- WEEK 4 -->


## HASH TABLE

### Give a high level overview of how to implement a hash table.
Data is sent through a hashing function. That hash function result is then put matched with an array index that points to a linked list and the data is added to the linked list

### Give a high level overview of how to implement a Linked List.
Nodes are created with values and pointers to other nodes to create a "list"

<!-- WEEK 5 -->

## BINARY SEARCH

### Why is binary search logarithmic time?
It removes half of the elements with every comparison


### If an element is smaller than its right neighbors, explain why there is definitely a peak to the right.
the definition of peak elements say that if all numbers are in an increasing fashion, then the last element is the peak

### Explain how you can still find an element in log time when the array is rotated
If you can find the pivot element, then you can still do log(n) binary search on it
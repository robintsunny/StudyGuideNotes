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


## DYNAMIC PROGRAMMING

### What is an optimal substructure? When might a problem have one?
A given problem has Optimal Substructure Property if optimal solution of the given problem can be obtained by using optimal solutions of its subproblems, such as shortest distance between 2 nodes with a node in between
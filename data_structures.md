# GRAPHS

## 1. How do we define a graph, and where are they commonly used?
Collection of vertices and edges commonly used to define relationship between vertices defined by edges 

## 2. What are the specific attributes that graphs can have, and how do we talk about them?
Weighted, Unweighted, Directed, Undirected


## 3. What are some ways we might store a graph in memory? What space/time complexity problems might we face?
Adjacency Linked Lists



### How do we define a graph mathematically?
G = (V,E)

### What is the difference between directed, undirected, weighted, and unweighted?
*Directed: one-way flow
Unidirected: two-way flow
Weighted: Edges have weight
Unweighted: Edges don't have weight

### Give an example of various types of graphs (Weighted Undirected, Unweighted Directed, Unweighted Undirected, etc.)
Wt-Und: Highways
Wt-Dir: Real Life Relationships
Uwt-Und: Facebook
Uwt-Dir: Twitter

### What makes a graph a simple graph? What attributes would make it not simple?
Unweighted, undirected graph containing no graph loops or multiple edges

### What is the maximum number of edges in a directed simple graph? Undirected simple graph? Answer should be in terms of N
E_max = N(N-1), N = number of vertices

### Describe the levels of connectivity a graph can have (strongly connected, weakly connected).
Stongly connected means you can be at any vertex and go to any other vertex


### What are cycles?
When Vertices have multiple paths connecting them 

### What are some naive ways we can store and traverse graphs? Be able to discuss time/space complexity of these approaches, and what issues we may face.
NxN arrays
Adjacency arrays
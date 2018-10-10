# MISC

### Name 5 benefits of HTML5
Accessibility, VA Support, Cleaner Code, Local Storage, Mobile Support

### What is localStorage? How might you use it?
It’s a little bit of a cross between regular old cookies and a client-side database. It’s better than cookies because it allows for storage across multiple windows, it has better security and performance and data will persist even after the browser is closed.

### Why are media queries useful?
Media query is a CSS technique introduced in CSS3.It uses the @media rule to include a block of CSS properties only if a certain condition is true.
Media queries extend the usefulness of media types by allowing more precise labeling of style sheets. This enables the content's presentation to be customized to a specific range of output devices without having to change the content itself.

### What is mobile-first design? Be as specific as possible.
designing for mobile before designing for desktop or any other device

### In which order do the React Lifecycle methods (including the optional ones) run?
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount


### In which lyfecycle methods should you make asynchronous fetches for data?
componentDidMount

### In which lyfecycle methods can you call setState?
componentDidMount
componentWillReceiveProps
componentDidUpdate


### Give one explanation for why we have to make AJAX requests in componentDidMount
You can’t guarantee the AJAX request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing AJAX in componentDidMount will guarantee that there’s a component to update.

### What is a state tree in the context of Redux?
A JS object that contains all the information, data, and UI state of an application

### Why don't we want to modify (i.e. mutate) our redux state?
The second principle of Redux is that the state tree is read only. You cannot modify or write to it. Instead, anytime you want to change the state, you need to dispatch an action. Using reducers helps minimize mistakes.

### What is a pure function? Impure function?
The pure functions are the functions whose returned value depends solely on the values of their arguments. Pure functions do not have any observable side effects, such as network or database calls. The pure functions just calculate the new value. You can be confident that if you call the pure function with the same set of arguments, you're going to get the same returned value. They are predictable. Also, pure functions do not modify the values passed to them. For example, squareAll function that accepts an array does not overwrite the items inside this array. Instead, it returns a new array by using items map.

On the opposite, impure functions may call the database or the network, they may have side effects, they may operate on the DOM, and they may override the values that you pass to them. This is going to be an important distinction because some of the functions that you're going to write in Redux have to be pure, and you need to be mindful of that.

### Describe in detail what a redux reducer is. What makes it a pure function?
A Reducer is a pure function that describes state mutations by taking the previous state of the app, the action being dispatched, and returns the next state of the app. 
A Reducer does not modify the state given to it. It has to be pure, so it has to return a new object.

### What is the role of the store in Redux?
It holds current application state, dispatch actions, and uses reducers to update the state

### What does the subscribe method do in Redux?
It lets you register a callback that the Redux store will call any time an action has been dispatched, so that you can update the UI of your application. It will reflect the current application state.
# React-Notes

React is a JavaScript library for building user interfaces. React makes building complex, interactive and reactive user interfaces simpler.
> React uses ```Declarative Approach``` means we define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.

## Components

React is all about "Components". Because all user interfaces in the end are made up of components. Components are resusable building blocks for our user interface. In the end, components are just combination of HTML, CSS (for styling) and possible JavaScript code for some logics.
* Resusablity
    * Don't repeat yourself
* Separation of Concerns.
    * Don't do too many things in one and the same place
> Split big chunks of code into multiple smaller functions

## JSX

JSX stands for JavaScript XML. JSX is used to write HTML code inside the React component. There is rule in the react component that we have to return only single root element per return statement.

## Props

Props are basically used to pass data from one component to another.

## Composition

Generally using smaller blocks to create UI is known as Composition. Important part of composition is `props.children`.

## State

States are used to keep the data in the components and re-render the components whenever the state changes. useState() function must be called directly inside the component, niether outside the component nor inside any component's function.


## JSX Limitations

You can't return more than one "root" JSX element. We can solve this problem by wrapping adjacent elements in a div. We can also returns elements as an array (but with some tweaks like passing key). We can use little trick by using wrapper component. We can also React Fragments <React.Fragment> or <></>

## React Portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

``` 
ReactDOM.createPortal(child, container)
```

The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element

## Refs

Refs provide a way to access DOM nodes or React elements created in the render method.

```
const myComp = (props) => {
    const myRef = useRef();

    return <div ref={myRef} />;
}
```

* Accessing Refs
```
const node = myRef.current;
```

## Effect / Side Effect

Side effects could be anything else apart from the main job (Evalulate, Render and react to user input) of the React eg. send HTTP request to backend server, set & manage timers, store data in browser storage. These tasks must happen outside of the normal component evaluation and render cycle - especially since they might block/delay renderding (e.g. Http requests). Therefore we have special tool to handle side effect which is called ```useEffect()``` hook.

```
useEffect(() => { ... }, [dependencies]);
```
Here, a function that should be executed AFTER every component evaluation IF the specified dependencies changed. Dependencies of the effect - the function only runs if the dependencies changed.

## useReducer

The `useReducer` Hook is similar to the `useState` Hook. It allows for custom state logic. If you find yourself keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful.

```
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
```

- state: The state snapshot used in the component re-render/re-evaluation cycle.
- dispatchFn: A function that can be sed to dispatch a new action (i.e. trigger an update of the state)
- reducerFn: A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new, updated state.
- initialState: The initial state
- initFn: A function to set the initial state programmtically.

| useState() | useReducer() |
| :---: | :---: |
| The main state management "tool" | Great if you need "more power" |
| Great for independent pieces of state/data | Should be considered if you have related pieces of state/data |
| Great if state updates are easy and limited to a few kinds of updates | Can be helpful if you have more complex state updates. |

## Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language

```
const ThemeContext = React.createContext('light');

const App = (props) => {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
}

const Toolbar = (props) => {

    const theme = useContext(ThemeContext);
    return (
        return <Button theme={theme}/>
    )
}
```

NOTE: React Context is NOT optimized for high frequnecy changes. (alternative is REDUX)


## Rules of Hooks

- Only call React Hooks in React Functions. React Component Functions and Custom Hooks.
- Only call React Hooks at the Top Level. Don't call them in nested function's and don't call them in any block statement.
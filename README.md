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
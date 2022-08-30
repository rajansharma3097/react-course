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

States are used to keep the data in the components and re-render the components whenever the state changes. useState() function must be called direatly inside the component, niether outside the component nor inside any component's function.

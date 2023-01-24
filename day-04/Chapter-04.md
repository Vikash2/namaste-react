## Chapter 04

---

## 1. Is JSX mandatory for React?

JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.

## 2. Is ES 6 mandaotory for React?

It is not mandatory but is highly recommendable. The latest projects created on React rely a lot on ES6.

## 3. `{Title} vs {<Title/>} vs {<Title></Title>}` in JSX?

`{Title}` - Here Title is a variable.

`{<Title/>}` - Here Title is a component, which has no content inside it.

`{<Title></Title>}` - Here Title is also a component, which allows to put content inside it.

## 4. How to write comments in React ?

Comments for React Components. We can write comments in React using the double forward-slash // or the asterisk format /\* \*/, similar to regular JavaScript.

But this will not work because we want to comment things inside the render block. This is because we use JSX inside the render block and must use multi-line comment in curly braces {/\* \*/}.

We must remember, that even though JSX gets rendered just like normal HTML, it is actually a syntax extension to JavaScript. So, using <!– –> as we did with HTML and XML will not work.

## 5. what is `<React.fragment></React.fragment> and <></>` in react?

A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

**Short Syntax** -
There is a new, shorter syntax you can use for declaring fragments. It looks like empty tags.
You can use <></> the same way you’d use any other element except that it doesn’t support keys or attributes.

**Keyed Fragments** - Fragments declared with the explicit `<React.Fragment>` syntax may have keys. A use case for this is mapping a collection to an array of fragments.

**Key is the only attribute that can be passed to Fragment currently.**

## 6. What is the Virtual DOM ?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called **reconciliation**.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

## 7. Is the Shadow DOM the same as the Virtual DOM?

No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

## 8. What is “React Fiber”?

Fiber is the new reconciliation engine in React 16.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is **incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.**

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

## 9. Why do we need keys in React? When do we need keys in React?

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

When you don’t have stable IDs for rendered items, we may use the item index as a key as a last resort.

React don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state. If we choose not to assign an explicit key to list items then React will default to using indexes as keys.

Keys only make sense in the context of the surrounding array.
A good rule of thumb is that elements inside the map() call need keys.

Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique. We can use the same keys when we produce two different arrays.

## 10. What are components?

Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

## 11. What are props?

The props in React are the inputs to a component of React. They can be single-valued or objects having a set of values that will be passed to components of React during creation by using a naming convention that almost looks similar to HTML-tag attributes. We can say that props are the data passed from a parent component into a child component.

The main purpose of props is to provide different component functionalities such as:

    Passing custom data to the React component.

    method of the component.

    Triggering state changes.

For example, consider we are creating an element with reactProp property as given below:
`<Element reactProp = "1" />`

This reactProp name will be considered as a property attached to the native props object of React which already exists on each component created with the help of React library: props.reactProp.

## 12. What is config driven UI?

Its like controlling the frontend using some conditions.
Dynamic UI.

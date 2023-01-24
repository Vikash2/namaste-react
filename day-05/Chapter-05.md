# Chapter-05

## 1. Difference between Named export, Default export and \* as export?

With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.

    // imports
    // ex. importing a single named export
    import { MyComponent } from "./MyComponent";

    // ex. importing multiple named exports
    import { MyComponent, MyComponent2 } from "./MyComponent";

    // ex. giving a named import a different name by using "as":
    import { MyComponent2 as MyNewComponent } from "./MyComponent";

    // exports from ./MyComponent.js file
    export const MyComponent = () => {}
    export const MyComponent2 = () => {}

You can also alias named imports, assign a new name to a named export as you import it, allowing you to resolve naming collisions, or give the export a more informative name.

    import MyComponent as MainComponent from "./MyComponent";

You can also Import all the named exports onto an object:

    import * as MainComponents from "./MyComponent";
    // use MainComponents.MyComponent and MainComponents.MyComponent2 here.

One can have only one default export per file. When we import we have to specify a name and import like:

    // import

    import MyDefaultComponent from "./MyDefaultExport";

    // export

    const MyComponent = () => {}

    export default MyComponent;

The naming of import is completely independent in default export and we can use any name we like.

## 2. What is the purpose of config file?

There are many different ways of storing config data in a React app. But keep in mind that since React works on the browser, anyone can inspect the source code of your app and see all the data. So make sure you do not store sensitive information, such as private or secret API keys in client-side config files, as they get bundled to the source during the build process.

Having a separate configuration file allows you to access variables instantly and improves the maintainability of the codebase since all the variables are in the same file. The core application will remain intact, and you can deploy to different servers with different configurations quickly.

## 3. What is React Hooks?

React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components. These are newly added features made available in React 16.8 version. Each lifecycle of a component is having 3 phases which include mount, unmount, and update. Along with that, components have properties and states. Hooks will allow using these methods by developers for improving the reuse of code with higher flexibility navigating the component tree.

Using Hook, all features of React can be used without writing class components. For example, before React version 16.8, it required a class component for managing the state of a component. But now using the useState hook, we can keep the state in a functional component.

**There are 2 rules which must be followed while you code with Hooks:**

React Hooks must be called only at the top level. It is not allowed to call them inside the nested functions, loops, or conditions.
It is allowed to call the Hooks only from the React Function Components.

## 4. What is useState() hook in React?

The useState() is a built-in React Hook that allows you for having state variables in functional components. It should be used when the DOM has something that is dynamically manipulating/controlling.

In the below-given example code, The useState(0) will return a tuple where the count is the first parameter that represents the counter’s current state and the second parameter setCounter method will allow us to update the state of the counter.

    ...
    const [count, setCounter] = useState(0);
    const [otherStuffs, setOtherStuffs] = useState(...);
    ...
    const setCount = () => {
    setCounter(count + 1);
    setOtherStuffs(...);
    ...
    };

We can make use of setCounter() method for updating the state of count anywhere. In this example, we are using setCounter() inside the setCount function where various other things can also be done. The idea with the usage of hooks is that we will be able to keep our code more functional and avoid class-based components if they are not required.

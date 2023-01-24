# Chapter - 02 - Igniting our App

---

## Run the application using parcel

    npx parcel index.html

## Build the project using parcel

    npx parcel build index.html

Here : Entry point is index.html, if we are doing `npm init -y ` then remove `main` from `package.json`.

## 1. What is NPM?

NPM (originally short for Node Package Manager) is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

## 3. What is 'Parcel/Webpack' ? Why do we need it?

These are module bundlers.

Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

Examples : webpack, parcel

## 4. What is .parcle-cache?

Cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## 5. What is npx?

NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

| NPM                                                                                                                                     | NPX                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| If you wish to run package through npm then you have to specify that package in your package.json and install it locally.               | A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically. |
| To use `create-react-app` in npm the commands are `npm install create-react-app` then `create-react-app myApp` (Installation required). | In npx you can create a react app without installing the package: `npx create-react-app myApp` This command is required in every app’s life cycle only once             |
| Npm is a tool that use to install packages.                                                                                             | Npx is a tool that use to execute packages.                                                                                                                             |
| Packages used by npm are installed globally. You have to care about pollution in the long term.                                         | Packages used by npx are not installed globally. You don’t have to worry about for pollution in the long term.                                                          |
|                                                                                                                                         |

## 6.What is the difference between dependencies and devdependencies?

The difference between these two, is that devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime. To save a dependency as a devDependency on installation we need to do an npm install --save-dev , instead of just an npm install --save.

## 7. What is Tree Shaking?

Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code. It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

## 8. What is Hot Module Replacement(HMR)?

Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:

- Save valuable development time by only updating what's changed.
- Retain application state which is lost during a full reload.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.

## 9. What are the properties of parcel.js?

## 10. What is .gitingnore? What should we add and not add into it?

The .gitignore file is a text file that tells Git which files or folders to ignore in a project.
_Complete the answers from the notes........_

## 11.What is the difference between package.json and package-lock.json files ?

In Node.js, package.json is a versioning file used to install multiple packages in your project. A package.json file contains metadata about the project and also the functional dependencies that is required by the application.

But the question is why package.lock.json is necessary when you have package.json in your project application. package.lock.json is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json. Let’s say if the current version of the package is 1.3.2 then it will save the version with (^) sign. Here carot(^) means, it will support any higher version with major version 1 for eg. 1.2.2.

Without package.lock.json, there might be some differences in installed versions in different environments. To overcome this problem, package.lock.json is created to have the same results in every environment. It should be in source control with the package.json file because if any other user will clone the project and install dependencies then it will install the exact same dependencies as in package.lock.json to avoid differences.

| package.json                                                                         | package.lock.json                                                                                               |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| It contains basic information about the project.                                     | It describes the exact tree that was generated to allow subsequent installs to have the identical tree.         |
| It is mandatory for every project.                                                   | It is automatically generated for those operations where npm modifies either node_modules tree or package.json. |
| It records important metadata about the project.                                     | It allows future devs to install the same dependencies in the project.                                          |
| It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project.                                          |

## 12. Why should we do not modify 'package.lock.json'?

_Continuing with previous answer..._ Make sure you don’t change package-lock.json directly. That’s being handled automatically by NPM. It reflects changes made to package.json to package-lock.json and keeps it up to date.

## 13. What is node_modules? Is it a good idea to push that on git?

The node_modules folder contains libraries downloaded from npm. You shouldn't push it to github (you should even add it to your .gitignore), bacause everyone who clones your repository can download it themselves (based on your package.json).

## 14. What is dist folder?

The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## 15. What is Browserslist? Why would we want it?

Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

During development we want to use the latest javascript features (e.g ES6) as it makes our jobs easier, leads to cleaner code, possibly better performance.

As javascript evolves, browsers won't support new features at the same pace, for instance not all browsers have built-in support for ES6 (aka ES2015). By using browserslist, transpilers/bundlers know what browsers you want to support, so they can "group" browsers in different categories and generate separate bundles, for example:

Legacy Bundle: Contains polyfills, larger bundle size, compatible with old browsers without ES6 support.
Modern Bundle: Smaller bundle size, optimized for modern browsers.
So our entrypoint (e.g index.html) is generated in a way that it'll load the required bundles according to current browser being used by a user.

This process is done by Angular, Vue and React. In the future, bundler tools may generate even more bundles depending on how different browsers are, one bundle per group of browsers. Generating more bundles optimizes your app even more, at the price of making the build slower (and more complex), it's a tradeoff.

## 16.What is Carrot(^) and Tilda(~) in package.json?

- **~version “Approximately equivalent to version”**, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0.

- **^version “Compatible with version”**, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.

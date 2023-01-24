/**
 * Hello World using JS
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World Using JS';
document.body.appendChild(heading);
*/


/**
 * Creating an element.

const heading = React.createElement("h1", {}, "Hello World using React");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
 */

/**
 * Creating multiple elements
 */

const heading = React.createElement('h1', {}, "Hello this is heading");

const container = React.createElement('div', {}, heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);

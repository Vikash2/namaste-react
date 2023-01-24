## Chapter -03 Laying the Foundation

---

## 1. What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).

As stated in the official docs of React, JSX provides syntactic sugar for React.createElement( ) function.

    We can create react applications without using JSX as well.

Let’s understand how JSX works:

Without using JSX, we would have to create an element by the following process:

`const text = React.createElement('p', {}, 'This is a text');
const container = React.createElement('div','{}',text );
ReactDOM.render(container,rootElement);`

Using JSX, the above code can be simplified:

    const text = React.createElement('p', {}, 'This is a text');

    const container = React.createElement('div','{}',text );
    ReactDOM.render(container,rootElement);`

    const container = (<div><p>This is a text</p></div>);
    ReactDOM.render(container,rootElement);`

As one can see in the code above, we are directly using HTML inside JavaScript.

## 2. JSX Features.

**1. Embedding Expressions in JSX** : In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:
You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.In the example below, we embed the result of calling a JavaScript function, formatName(user), into an `<h1>` element.

    function formatName(user) {
      return user.firstName + ' ' + user.lastName;}

    const user = {
      firstName: 'Harper',
      lastName: 'Perez'
    };

    const element = (
      <h1>
    	Hello, {formatName(user)}!
      </h1>
    );

**2. JSX is expression Too** : After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

This means that we can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

    function getGreeting(user) {
      if (user) {
    	return <h1>Hello, {formatName(user)}!</h1>;
      }
      return <h1>Hello, Stranger.</h1>;
    }

**3. Specifying Attributes with JSX** : We may use quotes to specify string literals as attributes:

`const element = <a href="https://www.reactjs.org"> link </a>;`

We may also use curly braces to embed a JavaScript expression in an attribute:

`const element = <img src={user.avatarUrl}></img>;
`

- We cannot put quotes around curly braces when embedding a JavaScript expression in an attribute. We should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.
- Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
  For example, class becomes className in JSX, and tabindex becomes tabIndex.

**4. Specifying Children with JSX :** If a tag is empty, you may close it immediately with />, like XML:

    const element = <img src={user.avatarUrl} />;

JSX tags may contain children:

    const element = (
      <div>
    	<h1>Hello!</h1>
    	<h2>Good to see you here.</h2>
      </div>
    );

**5. JSX Prevents Injection Attacks :** It is safe to embed user input in JSX:

    const title = response.potentiallyMaliciousInput;
    // This is safe:
    const element = <h1>{title}</h1>;

By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent XSS (cross-site-scripting) attacks.

**6. JSX Represents Objects:** Babel compiles JSX down to React.createElement() calls.
These two examples are identical:

    const element = (
      <h1 className="greeting">
    	Hello, world!
      </h1>
    );

    const element = React.createElement(

React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:

    // Note: this structure is simplified
    const element = {
      type: 'h1',
      props: {
    	className: 'greeting',
    	children: 'Hello, world!'
      }
    };

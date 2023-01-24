import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
import React from 'react';
function Header() {
  return (
    <nav className="cyan darken-4">
      <div className="nav-wrapper">
        <a href="http://localhost:3000/collapsible.html" className="brand-logo">
          FilmsStory
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Popular</a>
          </li>
          <li>
            <a href="badges.html">Films</a>
          </li>
          <li>
            <a href="collapsible.html">News</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };

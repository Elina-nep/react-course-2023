import React from "react";
import "./Header.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="header flex">
        <div>Main</div>
        <div>
          <ul className="header__nav">
            <li>
              <a href="/">Main page</a>
            </li>
            <li>
              <a href="/about"> About us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

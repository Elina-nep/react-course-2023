import React from "react";
import "./Header.css";

export class Header extends React.Component<{ label: string }> {
  array = this.props.label.split("/");
  pageTitle = this.array[this.array.length - 1];
  render() {
    return (
      <div className="header flex">
        <div className="page-title">
          {this.pageTitle ? "About us" : "Main page"}
        </div>
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

import React from "react";
import "./Header.css";

export class Header extends React.Component<{ label: string }> {
  array = this.props.label.split("/");
  pageTitle = this.array[this.array.length - 1];
  render() {
    return (
      <div className="header flex">
        <div className="page-title">
          {this.pageTitle ? this.pageTitle : "Main page"}
        </div>
        <div>
          <ul className="header__nav">
            <li>
              <a href="/">Main page</a>
            </li>
            <li>
              <a href="/About"> About us</a>
            </li>
            <li>
              <a href="/Form"> Add card</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

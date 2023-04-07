import React from "react";
import "./Header.css";

export const Header = ({ label }: { label: string }) => {
  const array = label.split("/");
  const pageTitle = array[array.length - 1];

  return (
    <div className="header flex">
      <div className="page-title">{pageTitle ? pageTitle : "Main page"}</div>
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
};

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = ({ label }: { label: string }) => {
  const array = label.split("/");
  const pageTitle = array[array.length - 1];

  return (
    <div className="header flex">
      <div className="page-title">{pageTitle ? pageTitle : "Main page"}</div>
      <div>
        <ul className="header__nav">
          <li>
            <Link to="/">Main page</Link>
          </li>
          <li>
            <Link to="/About"> About us</Link>
          </li>
          <li>
            <Link to="/Form"> Add card</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

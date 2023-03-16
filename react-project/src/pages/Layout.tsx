import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export class Layout extends React.Component<{ label: string }> {
  render() {
    return (
      <>
        <Header label={this.props.label} />
        <Outlet />
      </>
    );
  }
}

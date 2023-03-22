import React from "react";
import "./ErrorMessage.css";

interface iErrorM {
  text: string;
}

export class ErrorMessage extends React.Component<iErrorM> {
  constructor(props: iErrorM) {
    super(props);
  }
  render() {
    return <div className="error-message">Not valid {this.props.text}</div>;
  }
}

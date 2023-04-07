import React from "react";
import "./ErrorMessage.css";

interface iErrorM {
  message: string;
}

export const ErrorMessage = (message: iErrorM) => {
  return <div className="error-message">{message.message}</div>;
};

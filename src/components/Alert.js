import React from "react";
import { ReactComponent as Logo } from './success.svg';

export default function Alert(props) {

  return (
    //  if props.alert == null then no return else return
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <Logo/>{props.alert.message}
      </div>
    )
  );
}

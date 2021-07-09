import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Card(props) {
  return (
    <div>
        <i className={props.logo}></i>
        <h2>{props.titel}</h2>
    </div>
  );
}

export default Card;
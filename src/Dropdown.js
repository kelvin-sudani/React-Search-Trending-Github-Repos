import React from "react";
//import { useState, useCallback } from "react";
import "./styles.css";

export default function Dropdown({ data }) {
  //const [da, setDa] = useState(null);
  console.log(data);
  const dropitem = [];
  for (let item of data.entries()) {
    dropitem.push(
      <a
        href="#0"
        className="dropdown-item"
        key={item[1].url}
        onClick={e => {
          window.open(item[1].url);
        }}
      >
        <p>name: {item[1].name} </p>
        <p>stars: {item[1].stars}</p>
      </a>
    );
  }
  //console.log(dropitem);
  return <div>{dropitem}</div>;
}

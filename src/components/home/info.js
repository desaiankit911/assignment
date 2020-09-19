import React, { useState } from "react";

export default function SelectedInfo(props) {
  const selected = props.selectedOption;
  return (
    <div>
      {selected === "PYTHON" ? (
        <p>
          "Python is one of the most popular language use in each and every
          domain mainly for machine learning,web development, data analysis, big
          data,etc.."
        </p>
      ) : selected === "JAVA" ? (
        <p>
          "Java is one of the compliated languge but more promissing and use in
          many big tech companis"
        </p>
      ) : selected === "REACT-JS" ? (
        <p>
          "React is devloped by FB, it provides more advantages over other front
          end lanuages"
        </p>
      ) : (
        <p style={{ color: "red" }}>Select Something</p>
      )}
    </div>
  );
}

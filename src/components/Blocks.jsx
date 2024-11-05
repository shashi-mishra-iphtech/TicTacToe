import React from "react";

const Blocks = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        height: "150px",
        width: "150px",
        margin: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#0093e8",
        backgroundColor: "#fff",
        cursor: "pointer",
        borderRadius: "10px",
      }}
    >
      {props.value === "X" ? (
        <img src="x-mark.png" alt="" height={100} />
      ) : props.value === "O" ? (
        <img src="donuts.png" alt="" height={100} />
      ) : null}
    </div>
  );
};

export default Blocks;

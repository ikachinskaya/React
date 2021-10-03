import React from "react";

const Row = (props) => {
  const { children } = props;
  return (
    <div
      className="row"
      style={{
        flexWrap: "wrap",
        width: "1200px",
        margin: '0 auto',
        border: "5px solid blue",
      }}
    >
      {children}
    </div>
  );
};

export default Row;

import React from "react";

function List(props) {
  const { children } = props;
  return <ul style={{border:'10px solid red'}}>{children}</ul>;
}

export default List;

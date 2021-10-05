import React from 'react';
import Child from '../Child/child.jsx';
const Subparent = (props) => {
  return (
    <div>
      <h2>SubParent component</h2>
      <Child/>
    </div>
  );
}

export default Subparent;

import React from "react";
import Image from "./components/Image";

const srcImage =
  "https://image.freepik.com/free-photo/wide-angle-shot-of-a-single-tree-growing-under-a-clouded-sky-during-a-sunset-surrounded-by-grass_181624-22807.jpg";

function App() {
  return (
    <React.Fragment>
      <Image alt="Image" src={srcImage} />
    </React.Fragment>
  );
}

export default App;

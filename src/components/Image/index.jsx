import { Component } from "react";
import "./image.css";

class Image extends Component {
  render() {
    const { src, alt } = this.props;
    return (
      <div className="imgWrapper">
        <img className="image" src={src} alt={alt} />
      </div>
    );
  }
}

export default Image;
